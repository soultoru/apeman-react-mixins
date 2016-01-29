/**
 * Mixin for page components
 * @module ApPageMixin
 *
 */
"use strict";

import React from 'react';

/** @lends ApPageMixin */
let ApPageMixin = {

    //--------------------
    // Custom
    //--------------------
    $apPageMixed: true,

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
     * Register page view resolver.
     * @param {object} resolver - A resolver instance
     */
    registerPageViewResolver(resolver){
        let s = this;
        s._pageViewResolver = resolver;
    },

    /**
     * Register page stack.
     * @param {string} name - Name of stack
     * @param {object} stacker - A stacker instance
     */
    registerPageViewStacker(name, stacker){
        let s = this;
        s._pageStacks = s._pageStacks || {};
        let resolver = s._pageViewResolver;
        if (!resolver) {
            throw new Error('Resolver not found call `.registerPageViews()` before this.');
        }
        stacker.stackName = name;
        stacker.addListener('push', s.pageStackViewDidPush);
        stacker.addListener('pop', s.pageStackViewDidPop);
        s._pageStacks[name] = stacker;
    },

    registerPageViewStackers(stackers){
        let s = this;
        for (let name of Object.keys(stackers)) {
            s.registerPageViewStacker(name, stackers[name]);
        }

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
            throw new Error('Stack not found. Call `.registerPageStack()` on componentWillMount.')
        }
        return stack;
    },

    /**
     * Create page url from stacker
     * @param {object} stacker - View stacker.
     * @returns {string} - Page url
     */
    pageURLWithStacker(stacker){
        let s = this;
        return `/${s.pageName}/${stacker.stackName}/${stacker.toURL()}`;
    },


    /**
     * Restore page url
     * @param {string} url
     */
    restorePageURL(url){
        let s = this;
        if (!url) {
            return;
        }
        let urlComponents = url.replace(/^\//, '').split(/\//g);
        if (urlComponents[0] === s.pageName) {
            urlComponents.shift();
        }
        let stackName = urlComponents.shift(),
            stackerURL = urlComponents.join('/');
        try {
            let stacker = s.getPageStack(stackName);
            stacker.fromURL(stackerURL);
        } catch (e) {
            console.warn(`[${s.pageName}] Failed to restore url: ${url}`);
        }
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
    componentWillMount() {
        let s = this;
        if (!s.pageName) {
            throw new Error('pageName is required.');
        }
    },
    componentWillUnmount() {
        let s = this;
        for (let name of Object.keys(s._pageStacks || {})) {
            s.deregisterPageStack(name);
        }
    },

    //------------------
    // Private
    //------------------

    _pageStacks: null,
    _pageViewResolver: null

};

module.exports = Object.freeze(ApPageMixin);