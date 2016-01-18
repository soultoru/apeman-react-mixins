/**
 * Mixin to handle toast.
 * @constructor ApToastMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';
import {inherits} from 'util';
import EventEmitter from 'events';
const TOAST_MESSAGE_KEY = "_apToastMessage";

/** Class to hold toast data */
class Toaster extends EventEmitter {
    constructor() {
        super()
    }
}


/** @lends ApToastMixin */
let ApToastMixin = {

    //--------------------
    // Custom
    //--------------------

    /**
     * Get current toast messages.
     * @returns {object} - Messages object.
     */
    getToaster(){
        let s = this;
        return s.props.toaster || s.context[TOAST_MESSAGE_KEY];
    },

    /**
     * Set toast message.
     * @param {string} message - Message to set
     * @param {string} [level="default"] - Level of message.
     */
    toast(message, level){
        let s = this;
        let toaster = s.getToaster();
        level = level || 'default';
        toaster.emit('toast', {
            level: level,
            message: message
        });
    },

    /**
     * Set info toast message
     */
    infoToast(message){
        let s = this;
        s.toast(message, 'info');
    },

    /**
     * Set warn toast message
     */
    warnToast(message){
        let s = this;
        s.toast(message, 'warn');
    },

    /**
     * Set error toast message
     */
    errorToast(message){
        let s = this;
        s.toast(message, 'error');
    },

    //--------------------
    // Specs
    //--------------------

    propTypes: {
        toaster: types.instanceOf(Toaster)
    },

    statics: {
        Toaster: Toaster
    },

    contextTypes: {
        [TOAST_MESSAGE_KEY]: types.object
    },

    childContextTypes: {
        [TOAST_MESSAGE_KEY]: types.object
    },

    getChildContext(){
        let s = this;
        return {
            [TOAST_MESSAGE_KEY]: s.getToaster()
        };
    }

    //--------------------
    // Lifecycle
    //--------------------


};

module.exports = Object.freeze(ApToastMixin);
