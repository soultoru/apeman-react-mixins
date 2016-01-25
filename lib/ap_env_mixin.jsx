/**
 * Mixin to handle resize.
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

    isProduction(){
        let s = this,
            {props} = s;
        return props.NODE_ENV === 'production';
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
