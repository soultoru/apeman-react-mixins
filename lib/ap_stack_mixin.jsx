/**
 * Mixin to handle stack
 */
import React, {PropTypes as types} from 'react';
import {ApViewStack} from 'apeman-react-view';
"use strict";

const STACK_INSETS_STATE_KEY = 'stackInsets';

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
        return s.state[STACK_INSETS_STATE_KEY] || {};
    },
    /**
     * Set insets of the stack.
     * @param {nextInsets}
     */
    setStackInsets(nextInsets){
        let s = this;
        let insets = s.getStackInsets();
        s.setState({
            [STACK_INSETS_STATE_KEY]: Object.assign(insets, nextInsets)
        });
    },

    //--------------------
    // Specs
    //--------------------

    statics: {
        Stacker: ApViewStack.Stacker
    },

    propTypes: {
        stacker: types.instanceOf(ApViewStack.Stacker).isRequired
    },

    getInitialState() {
        return {
            [STACK_INSETS_STATE_KEY]: {}
        };
    }

};

module.exports = Object.freeze(ApStackMixin);
