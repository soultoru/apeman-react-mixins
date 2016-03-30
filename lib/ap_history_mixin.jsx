/**
 * Mixin for history.
 * @constructor ApHistoryMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';
import apHistory from 'apeman-brws-history';
import defaults from 'defaults';

/** @lends ApHistoryMixin */
let ApHistoryMixin = {

    //--------------------
    // Custom
    //--------------------
    $apHistoryMixed: true,

    //--------------------
    // Specs
    //--------------------

    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount() {
        let s = this;
        let noop = () => undefined;
        defaults(s, {
            historyDidPop: noop
        });
    },

    componentDidMount() {
        let s = this;
        apHistory.onPop(s.historyDidPop);
    },

    componentWillUnmount() {
        let s = this;
        apHistory.offPop(s.historyDidPop);
    }


};

module.exports = Object.freeze(ApHistoryMixin);
