/**
 * Mixin to handle error.
 * @constructor ApExceptionMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';
import defaults from 'defaults';

/** @lends ApExceptionMixin */
let ApExceptionMixin = {

    //--------------------
    // Custom
    //--------------------
    $apErrorMixed: true,

    handleException(err){
        let s = this;
        s.willHandleException(err);
        s.doHandleException(err);
        s.didHandleException(err);
    },

    //--------------------
    // Specs
    //--------------------

    componentWillMount(){
        let s = this;
        let noop = (value => value);

        defaults(s, {
            willHandleException: noop,
            didHandleException: noop
        });
    },

    componentDidMount(){
        let s = this;
        if (!s.doHandleException) {
            console.warn('[ApExceptionMixin] .doHandleException() is required.');
            return;
        }
        window.addEventListener('error', s.handleException);
    },

    componentWillUnmount() {
        let s = this;
        window.removeEventListener('error', s.handleException);
    }
};

module.exports = Object.freeze(ApExceptionMixin);
