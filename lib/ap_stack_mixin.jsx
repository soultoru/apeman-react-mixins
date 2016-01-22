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

    /**
     * Bind stacker events.
     * @param {Stacker} stacker - A stacker instance.
     */
    bindStacker(stacker) {
        let s = this;
        s._addStackerListener('push', s.stackedViewDidPush);
        s._addStackerListener('pop', s.stackedViewDidPop);
    },

    /**
     * Unbind stacker events.
     * @param {Stacker} stacker - A stacker instance.
     */
    unbindStacker(stacker) {
        let s = this;
        s._removeStackerListener('push', s.stackedViewDidPush);
        s._removeStackerListener('pop', s.stackedViewDidPop);
    },

    /**
     * Get width of scrollable content in the top view.
     * @returns {number|null}
     */
    getStackedScrollWidth(){
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

    _addStackerListener(event, listner){
        let s = this,
            {stacker} = s.props;
        if (listner && stacker) {
            stacker.addListener(event, listner);
        }
    },

    _removeStackerListener(event, listner){
        let s = this,
            {stacker} = s.props;
        if (listner && stacker) {
            stacker.removeListener(event, listner);
        }
    }

};

module.exports = Object.freeze(ApStackMixin);
