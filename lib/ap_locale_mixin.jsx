/**
 * React mixin set of apeman.
 * @constructor ApLocaleMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';

const LOCALE_PROP_KEY = "_apLocale";

/** @lends LocaleMixin */
let LocaleMixin = {

    //--------------------
    // Custom
    //--------------------


    /**
     * Get locales
     * @returns {object} - Locale data.
     */
    getLocale(){
        let s = this;
        return s.context[LOCALE_PROP_KEY];
    },

    //--------------------
    // Specs
    //--------------------
    contextTypes: {
        [LOCALE_PROP_KEY]: types.object
    },
    childContextTypes: {
        [LOCALE_PROP_KEY]: types.object
    },

    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount() {
    },

    componentDidMount() {
        let s = this;
    },

    componentWillReceiveProps(nextProps) {
        let s = this;
    },

    componentWillUpdate(nextProps, nextState) {
        let s = this;
    },

    componentDidUpdate(prevProps, prevState) {
        let s = this;
    },

    componentWillUnmount() {
        let s = this;
    },

    getChildContext(){
        let s = this;
        return {
            [LOCALE_PROP_KEY]: s.props.locale || s.getLocale()
        }
    }

};

module.exports = Object.freeze(LocaleMixin);