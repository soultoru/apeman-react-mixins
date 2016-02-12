/**
 * Mixin to check env.
 * @constructor ApEnvMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';

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
        return s.props.NODE_ENV;
    },

    //--------------------
    // Specs
    //--------------------

    propTypes: {
        NODE_ENV: types.string.isRequired
    },

    getDefaultProps() {
        return {
            NODE_ENV: process.env.NODE_ENV
        }
    }

};

module.exports = Object.freeze(ApEnvMixin);
