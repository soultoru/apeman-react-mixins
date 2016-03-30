/**
 * Mixin for flush.
 * @constructor ApFlushMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';
import assert from 'assert';

/** @lends ApFlushMixin */
let ApFlushMixin = {

    //--------------------
    // Custom
    //--------------------
    $apFlushMixed: true,

    /**
     * Flush message.
     * @param {string} msg - Message to show.
     */
    flush(msg) {
        if (!msg) {
            return;
        }
        let s = this,
            [text, level] = msg.split(':').reverse();
        s.toast(text, level);
    },

    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount() {
        let s = this;
        assert.ok(s.$apToastMixed, "ApToastMixin is required.");
    }


};

module.exports = Object.freeze(ApFlushMixin);
