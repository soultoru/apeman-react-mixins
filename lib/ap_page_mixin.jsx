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

    /**
     * Get layout for page.
     * @returns {object}
     */
    getPageLayouts(){
        let s = this;
        return s._pageLayouts || {};
    },

    /**
     * Update page layout.
     * @param {string} name - Name of layout.
     * @param {object} layout - Layout data.
     */
    updatePageLayout(name, layout){
        let s = this;
        let _pageLayouts = s.getPageLayouts();
        _pageLayouts[name] = Object.assign(
            _pageLayouts[name] || {},
            layout
        );
        s._pageLayouts = _pageLayouts;
        s.layout();
    },

    //--------------------
    // Specs
    //--------------------
    getInitialState() {
        return {};
    },

    //--------------------
    // Lifecycle
    //--------------------
    componentWillMount() {
        let s = this;
        s.pageName = s.pageName || (s.getPageName && s.getPageName());
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

    _pageLayouts: null,
    _pageStacks: null,
    _pageViewResolver: null

};

module.exports = Object.freeze(ApPageMixin);