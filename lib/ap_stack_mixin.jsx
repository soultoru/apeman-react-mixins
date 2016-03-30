/**
 * Mixin to handle stack
 */

import React, {PropTypes as types} from 'react';
"use strict";

const INSETS_STATE_KEY = '_apStackInsets';

/** @lends ApStackMixin */
const ApStackMixin = {

    //--------------------
    // Custom
    //--------------------
    $apStackMixed: true,

    /**
     * Get insets of the stack.
     * @returns {object}
     */
    getStackInsets() {
        let s = this;
        return s.state[INSETS_STATE_KEY] || {};
    },
    /**
     * Set insets of the stack.
     * @param {object} nextInsets - Insets to set.
     */
    setStackInsets(nextInsets) {
        let s = this;
        let insets = s.getStackInsets();
        s.setState({
            [INSETS_STATE_KEY]: Object.assign(insets, nextInsets)
        });
    },

    /**
     * Bind stacker events.
     * @param {Stacker} stacker - A stacker instance.
     */
    bindStacker(stacker) {
        let s = this;
        s._addStackerListener(stacker, 'push', s.stackedViewDidPush);
        s._addStackerListener(stacker, 'pop', s.stackedViewDidPop);
    },

    /**
     * Unbind stacker events.
     * @param {Stacker} stacker - A stacker instance.
     */
    unbindStacker(stacker) {
        let s = this;
        s._removeStackerListener(stacker, 'push', s.stackedViewDidPush);
        s._removeStackerListener(stacker, 'pop', s.stackedViewDidPop);
    },

    /**
     * Get width of scrollable content in the top view.
     * @returns {number|null}
     */
    getStackedScrollWidth() {
        let s = this,
            {stacker} = s.props;
        let topView = stacker && stacker.topView();
        if (!topView) {
            return null;
        }
        let wrapElm = document && document.getElementById(`view-wrap-${topView.id}`);
        if (!wrapElm) {
            return null;
        }
        let bodyElm = wrapElm.querySelector('.ap-view-body');
        if (!bodyElm) {
            return null;
        }
        return bodyElm.scrollWidth || null;
    },

    //--------------------
    // Specs
    //--------------------

    statics: {},

    propTypes: {
        stacker: types.object.isRequired,
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

    componentWillMount() {
        let s = this;
        let {props} = s;

        s.bindStacker(props.stacker);
    },

    componentDidMount() {
        let s = this;
        let {props} = s;
        if (props.stackInsets) {
            s.setStackInsets(props.stackInsets);
        }
    },

    componentWillReceiveProps(nextProps) {
        let s = this;
        let {props} = s;

        if (nextProps.stackInsets) {
            s.setStackInsets(nextProps.stackInsets);
        }
        if (nextProps.stacker) {
            s.unbindStacker(props.stacker);
            s.bindStacker(nextProps.stacker);
        }
    },

    componentWillUnmount() {
        let s = this;
        let {props} = s;
        s.unbindStacker(props.stacker);
    },

    //------------------
    // Private
    //------------------

    _addStackerListener(stacker, event, listner) {
        let s = this;
        if (listner && stacker) {
            stacker.addListener(event, listner);
        }
    },

    _removeStackerListener(stacker, event, listner) {
        let s = this;
        if (listner && stacker) {
            stacker.removeListener(event, listner);
        }
    }

};

module.exports = Object.freeze(ApStackMixin);
