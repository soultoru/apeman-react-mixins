/**
 * Mixin to detect outside tap.
 * @constructor ApOutsideMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';
import ReactDOM from 'react-dom';
import defaults from 'defaults';

class BodyTapRecognizer {
    constructor() {
        let s = this;

        s._hammer = null;
    }

    getDOMNode() {
        let s = this;
        return document.body;
    }

    getHammer() {
        let s = this,
            {_hammer} = s;
        if (_hammer) {
            return _hammer;
        }
        const Hammer = require('hammer');
        s._hammer = new Hammer(s.getDOMNode());
        return s.getHammer();
    }

    addOutsideListener(listener) {
        let s = this,
            hammer = s.getHammer();
        hammer.on('tap', listener);
    }

    removeOutsideListener(listener) {
        let s = this,
            hammer = s.getHammer();
        hammer.off('tap', listener);
    }
}

Object.assign(BodyTapRecognizer, {
    singleton: new BodyTapRecognizer()
});

/** @lends ApOutsideMixin */
let ApOutsideMixin = {

    //--------------------
    // Custom
    //--------------------
    $apOutsideMixed: true,

    statics: {},

    handleTapForOutside(e) {
        let s = this,
            node = ReactDOM.findDOMNode(s);
        let contained = node.contains(e.target);
        if (!contained) {
            s.outsideDidTap(e);
        }
    },

    //--------------------
    // Specs
    //--------------------

    propTypes: {
        onOutside: types.func
    },

    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount() {
        let s = this;

        let noop = () => undefined;
        defaults(s, {
            outsideDidTap: noop
        });
    },

    componentDidMount() {
        let s = this;
        BodyTapRecognizer.singleton.addOutsideListener(s.handleTapForOutside);
    },

    componentWillUnmount() {
        let s = this;
        BodyTapRecognizer.singleton.removeOutsideListener(s.handleTapForOutside);
    }


};

module.exports = Object.freeze(ApOutsideMixin);
