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
            maxWidth: state.pageMainWidth
        }
    },

    /** Insets for main stack of page. */
    pageMainStackInsets(state){
        let s = this;
        return {
            top: state.pageHeaderHeight
        };
    },

    /**
     * Register page main stack.
     * @param {object} view - Root view component
     * @param {object} props - Props for the root view.
     */
    registerPageMainStack(view, props){
        let s = this;
        s._pageMainStack = new (ApViewStack.Stacker)({
            root: view,
            rootProps: props
        });
    },

    /**
     * Get page main stack.
     * @returns {ApViewStack.Stacker}
     */
    getPageMainStack(){
        let s = this;
        let stack = s._pageMainStack;
        if (!stack) {
            throw new Error('Page main stack not found. Call .registerPageMainStack() on componentWillMount.')
        }
        return stack;
    },

    _pageMainStack: null,

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

export default Object.freeze(ApPageMixin);