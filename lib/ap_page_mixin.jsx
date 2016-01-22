/**
 * Mixin for page components
 * @module ApPageMixin
 *
 */
"use strict";

import React from 'react';
import {ApViewStack} from 'apeman-react-view';

/** @lends ApPageMixin */
let ApPageMixin = {

    //--------------------
    // Custom
    //--------------------

    /** Handle layout change of main */
    handlePageMainLayout(layout) {
        let s = this;
        s.setState({
            pageMainWidth: parseInt(layout.scrollWidth)
        });
    },

    /** Handle layout change of header */
    handlePageHeaderLayout(layout) {
        let s = this;
        s.setState({
            pageHeaderHeight: parseInt(layout.height)
        });
    },

    /** Style for page header */
    pageHeaderStyle(state){
        let s = this;
        return {
            maxWidth: state.pageMainWidth + 1
        }
    },

    /** Insets for insets of main. */
    pageMainInsets(state){
        let s = this;
        return {
            top: state.pageHeaderHeight
        };
    },

    /**
     * Register page main stack.
     * @param {string} name - Name of stack
     * @param {object} [view] - Root view component
     * @param {object} [props] - Props for the root view.
     */
    registerPageStack(name, view, props){
        let s = this;
        s._pageStacks = s._pageStacks || {};
        s._pageStacks[name] = new (ApViewStack.Stacker)({
            root: view,
            rootProps: props
        });
    },

    /**
     * Get page main stack.
     * @param {string} name - Name of stack
     * @returns {ApViewStack.Stacker}
     */
    getPageStack(name){
        let s = this;
        let stack = s._pageStacks[name];
        if (!stack) {
            throw new Error('Stack not found. Call .registerPageStack() on componentWillMount.')
        }
        return stack;
    },

    _pageStacks: null,

    //--------------------
    // Specs
    //--------------------
    getInitialState() {
        return {
            /** Width of main content */
            pageMainWidth: null,
            /** Height of header */
            pageHeaderHeight: null
        };
    }


};

module.exports = Object.freeze(ApPageMixin);