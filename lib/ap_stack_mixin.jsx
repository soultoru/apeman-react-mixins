/**
 * Mixin to handle stack
 */
import React, {PropTypes as types} from 'react';
import {ApViewStack} from 'apeman-react-view';
"use strict";

const INSETS_STATE_KEY = '_apStackInsets';

/** @lends ApStackMixin */
const ApStackMixin = {

    //--------------------
    // Custom
    //--------------------

    /**
     * Render a stack element.
     * @returns {object} - A react element.
     */
    renderStack(){
        let s = this;
        let {state, props} = s;
        let insets = s.getStackInsets();
        return <ApViewStack stacker={props.stacker}
                            insetTop={insets.top || 0}
                            insetRight={insets.right || 0}
                            insetLeft={insets.left || 0}
                            insetBottom={insets.bottom || 0}
        >
        </ApViewStack>;
    },
    /**
     * Get insets of the stack.
     * @returns {object}
     */
    getStackInsets(){
        let s = this;
        return s.state[INSETS_STATE_KEY] || {};
    },
    /**
     * Set insets of the stack.
     * @param {object} nextInsets - Insets to set.
     */
    setStackInsets(nextInsets){
        let s = this;
        let insets = s.getStackInsets();
        s.setState({
            [INSETS_STATE_KEY]: Object.assign(insets, nextInsets)
        });
    },

    //--------------------
    // Specs
    //--------------------

    statics: {
        Stacker: ApViewStack.Stacker
    },

    propTypes: {
        stacker: types.instanceOf(ApViewStack.Stacker).isRequired,
        stackInsets: types.object
    },

    getInitialState() {
        return {
            [INSETS_STATE_KEY]: {}
        };
    },

    //--------------------
    // Lifecycle
    //--------------------

    componentDidMount() {
        let s = this;
        let {props} = s;
        if (props.stackInsets) {
            s.setStackInsets(props.stackInsets);
        }
    },

    componentWillReceiveProps(nextProps) {
        let s = this;
        if (nextProps.stackInsets) {
            s.setStackInsets(nextProps.stackInsets);
        }
    }
};

module.exports = Object.freeze(ApStackMixin);
