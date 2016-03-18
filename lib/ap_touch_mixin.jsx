/**
 * Mixin to add touch handlers.
 * @constructor ApTouchMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';
import ReactDOM from 'react-dom';

const TOUCH_HAMMER_KEY = "_apTouchHammer";

function createTouchHammer(node, props, getData) {
    if (!node) {
        return;
    }
    let Hammer = require('hammerjs'),
        hammer = new Hammer(node);
    if (props.touchOptions) {
        hammer.set(props.touchOptions);
    }
    Object.keys(ApTouchMixin.propTypes)
        .filter(key => !!props[key])
        .forEach(key => {
            if (/^on/.test(key)) {
                let event = key.replace(/^on/, '').toLowerCase();
                let handler = props[key];
                hammer.on(event, (e) => {
                    e.data = getData(); // Set touching data.
                    handler(e);
                });
            }
            if (/Direction$/.test(key)) {
                let gesture = key.replace(/Direction$/, '');
                hammer.get(gesture).set({direction: Hammer['DIRECTION_' + props[key]]})
            }
            if (/Threshold$/.test(key)) {
                let threshold = key.replace(/Threshold$/, '');
                hammer.get(threshold).set({threshold: props[key]});
            }
        });
    return hammer;
}

function destroyTouchHammer(hammer) {
    if (!hammer) {
        return;
    }
    hammer.stop();
    hammer.destroy();
}

function supportsTouch(props) {
    let touchableKey = Object.keys(ApTouchMixin.propTypes);
    for (let key of Object.keys(props)) {
        let hit = !!~touchableKey.indexOf(key);
        if (hit) {
            return true;
        }
    }
    return false;
}

/** Enum for touching */
const touchEnums = {
    directions: [
        'NONE',
        'LEFT',
        'RIGHT',
        'UP',
        'DOWN',
        'HORIZONTAL',
        'VERTICAL',
        'ALL'
    ]
};

/** @lends ApTouchMixin */
let ApTouchMixin = {

    //--------------------
    // Custom
    //--------------------

    [TOUCH_HAMMER_KEY]: null,

    //--------------------
    // Specs
    //--------------------

    propTypes: {
        onTap: types.func,
        onDoubleTap: types.func,
        onPan: types.func,
        onPanStart: types.func,
        onPanMove: types.func,
        onPanEnd: types.func,
        onPanCancel: types.func,
        onSwipe: types.func,
        onPress: types.func,
        onPressUp: types.func,
        onPinch: types.func,
        onPinchStart: types.func,
        onPinchMove: types.func,
        onPinchEnd: types.func,
        onPinchCancel: types.func,
        onRotate: types.func,
        onRotateStart: types.func,
        onRotateMove: types.func,
        onRotateEnd: types.func,
        onRotateCancel: types.func,
        touchOptions: types.object,
        panThreshold: types.number,
        panDirection: types.oneOf(touchEnums.directions),
        swipeDirection: types.oneOf(touchEnums.directions)
    },

    statics: {},

    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount() {
        let s = this;
        s.getTouchData = s.getTouchData || (()=> undefined);
    },

    componentDidMount() {
        let s = this;
        let touchable = supportsTouch(s.props);
        let getData = () => s.getTouchData();
        if (touchable) {
            s[TOUCH_HAMMER_KEY] = createTouchHammer(ReactDOM.findDOMNode(s), s.props, getData);
        }
    },

    componentWillUnmount() {
        let s = this;
        let hammer = s[TOUCH_HAMMER_KEY];
        if (hammer) {
            destroyTouchHammer(hammer);
        }
        delete s[TOUCH_HAMMER_KEY];
    }
};


module.exports = Object.freeze(ApTouchMixin);
