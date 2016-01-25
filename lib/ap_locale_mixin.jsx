/**
 * Mixin to handle locale.
 * @constructor ApLocaleMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';

const LOCALE_LOCALE_KEY = "_apLocale";

/** @lends ApLocaleMixin */
let ApLocaleMixin = {

    //--------------------
    // Custom
    //--------------------
    $apLocaleMixed: true,

    /**
     * Get locales
     * @returns {object} - Locale data.
     */
    getLocale(){
        let s = this;
        let locale = s[LOCALE_LOCALE_KEY] || s.context[LOCALE_LOCALE_KEY];
        if (!locale) {
            let msg = "Locale no initialized. You need to call `.registerLocale()` on this component or one of it's parents";
            throw new Error(msg);
        }
        return locale;
    },

    /**
     * Register locale data.
     * @param {object} locale
     */
    registerLocale(locale){
        let s = this;
        s[LOCALE_LOCALE_KEY] = locale;
    },

    //--------------------
    // Specs
    //--------------------

    contextTypes: {
        [LOCALE_LOCALE_KEY]: types.object
    },
    childContextTypes: {
        [LOCALE_LOCALE_KEY]: types.object
    },
    getChildContext(){
        let s = this;
        return {
            [LOCALE_LOCALE_KEY]: s.getLocale()
        }
    }

    //--------------------
    // Lifecycle
    //--------------------


};

module.exports = Object.freeze(ApLocaleMixin);
