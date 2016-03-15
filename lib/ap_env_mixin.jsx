/**
 * Mixin to check env.
 * @constructor ApEnvMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';


const ENV_ENV_KEY = "_apEnv";

/** @lends ApEnvMixin */
let ApEnvMixin = {

    //--------------------
    // Custom
    //--------------------
    $apEnvMixed: true,

    /**
     * Detect if env is production.
     * @returns {boolean}
     */
    isProductionEnv(){
        let s = this;
        return s.getEnv() === 'production';
    },

    /**
     * Get env values.
     * @returns {string} - Env value.
     */
    getEnv(){
        let s = this;
        return s.props.NODE_ENV || s.context[ENV_ENV_KEY] || process.env.NODE_ENV;
    },

    //--------------------
    // Specs
    //--------------------

    propTypes: {
        NODE_ENV: types.string
    },

    contextTypes: {
        [ENV_ENV_KEY]: types.string
    },

    childContextTypes: {
        [ENV_ENV_KEY]: types.string
    },

    getChildContext(){
        let s = this;
        return {
            [ENV_ENV_KEY]: s.getEnv()
        }
    }

};

module.exports = Object.freeze(ApEnvMixin);
