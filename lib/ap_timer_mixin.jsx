/**
 * Mixin for timer.
 * @constructor ApTimerMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';
import Promise from  'apemanpromise';
import argx from 'argx';

/** @lends ApTimerMixin */
let ApTimerMixin = {

    //--------------------
    // Custom
    //--------------------
    $apTimerMixed: true,

    /**
     * Set a timer with name.
     * @param {string} name - Name of the timer.
     * @param {number} duration - Timeout duration.
     * @returns {Promise}
     */
    setTimer(name, duration){
        let s = this;
        return new Promise(resolve => {
            let id = setTimeout(() => {
                resolve(id);
            }, duration);
            s._timers[name] = id;
        });
    },

    /**
     * Clear and set timer.
     * @param {string} name - Name of the timer.
     * @param {number} duration - Timeout duration.
     * @returns {Promise}
     */
    resetTimer(name, duration){
        let s = this;

        return s.clearTimer(name)
            .then(
                s.setTimer(name, duration)
            );
    },

    /**
     * Clear a timer with name.
     * @param {string} name - Name of timer.
     * @returns {Promise}
     */
    clearTimer(name){
        let s = this;
        let id;
        if (s._timers.hasOwnProperty(name)) {
            id = s._timers[name];
            clearTimeout(id);
            delete s._timers[name];
        }
        return Promise.resolve(id);
    },

    /**
     * Clear all timers.
     * @returns {Promise}
     */
    clearAllTimers(){
        let s = this;
        return Promise.all(
            Object.keys(s._timers || {}).map(name =>
                s.clearTimer(name)
            )
        );
    },

    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount() {
        let s = this;
        s._timers = {};
    },

    componentWillUnmount() {
        let s = this;

        s.clearAllTimers();
        delete s._timers;
    },

    _timers: undefined


};

module.exports = Object.freeze(ApTimerMixin);
