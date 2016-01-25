/**
 * Mixin to handle toast.
 * @constructor ApToastMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';
import {Toaster} from 'apeman-react-toast';

const TOAST_TOASTER_KEY = "_apToastToaster";

/** @lends ApToastMixin */
let ApToastMixin = {

    //--------------------
    // Custom
    //--------------------
    $apToastMixed: true,

    /**
     * Get current toast messages.
     * @returns {object} - Messages object.
     */
    getToaster(){
        let s = this;
        let toaster = s[TOAST_TOASTER_KEY] || s.context[TOAST_TOASTER_KEY];
        if (!toaster) {
            let msg = "Toaster no initialized. You need to call `.registerToaster()` on this component or one of it's parents";
            throw new Error(msg);
        }
        return toaster;
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

    /**
     * Decorate toast context.
     */
    registerToaster(options){
        let s = this;
        s[TOAST_TOASTER_KEY] = new Toaster(options);
    },

    //--------------------
    // Specs
    //--------------------

    contextTypes: {
        [TOAST_TOASTER_KEY]: types.object
    },

    childContextTypes: {
        [TOAST_TOASTER_KEY]: types.object
    },

    getChildContext(){
        let s = this;
        return {
            [TOAST_TOASTER_KEY]: s.getToaster()
        };
    }

    //--------------------
    // Lifecycle
    //--------------------


};

module.exports = Object.freeze(ApToastMixin);
