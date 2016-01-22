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
        let pageMainWidth = state.pageMainWidth;
        return {
            maxWidth: pageMainWidth ? (pageMainWidth + 1) : null
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
     * Register page stack.
     * @param {string} name - Name of stack
     * @param {object} [view] - Root view component
     * @param {object} [props] - Props for the root view.
     */
    registerPageStack(name, view, props){
        let s = this;
        s._pageStacks = s._pageStacks || {};
        let stacker = new (ApViewStack.Stacker)({
            root: view,
            rootProps: props
        });
        stacker.stackName = name;
        stacker.addListener('push', s.pageStackViewDidPush);
        stacker.addListener('pop', s.pageStackViewDidPop);
        s._pageStacks[name] = stacker;
    },

    /**
     * De register page stack
     * @param name
     */
    deregisterPageStack(name){
        let s = this;
        let stacker = s._pageStacks[name];
        stacker.removeListener('push', s.pageStackViewDidPush);
        stacker.removeListener('pop', s.pageStackViewDidPop);
        delete s._pageStacks[name];
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
    },

    //--------------------
    // Lifecycle
    //--------------------
    componentWillUnmount() {
        let s = this;
        for (let name of Object.keys(s._pageStacks || {})) {
            s.deregisterPageStack(name);
        }
    },

    //------------------
    // Private
    //------------------

    _pageStacks: null

};

module.exports = Object.freeze(ApPageMixin);