/**
 * Mixin to handle error.
 * @constructor ApExceptionMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';

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
        s.willHandleException = s.willHandleException || noop;
        s.didHandleException = s.didHandleException || noop;
    },

    componentDidMount(){
        let s = this;
        if (s.doHandleException) {
            console.warn('[ApExceptionMixin] .doHandleException() is deprecated. use .calcLayouts() instead.');
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
