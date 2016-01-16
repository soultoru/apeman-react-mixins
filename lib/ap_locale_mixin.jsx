/**
 * Mixin to handle locale.
 * @constructor ApLocaleMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';

const LOCALE_PROP_KEY = "_apLocale";

/** @lends ApLocaleMixin */
let ApLocaleMixin = {

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
    getChildContext(){
        let s = this;
        return {
            [LOCALE_PROP_KEY]: s.props.locale || s.getLocale()
        }
    }

    //--------------------
    // Lifecycle
    //--------------------


};

module.exports = Object.freeze(ApLocaleMixin);
