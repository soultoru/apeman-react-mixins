/**
 * Mixin for cycle.
 * @constructor ApCycleMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';
import defaults from 'defaults';
let noop = (values => values);

/** @lends ApCycleMixin */
let ApCycleMixin = {

    //--------------------
    // Custom
    //--------------------
    $apCycleMixed: true,

    /**
     * Execute something with cycle.
     * @param {string|number|object} params - Parameters.
     * @param {object} handlers - Fetch handlers.
     */
    cycle(params, handlers){
        let s = this;
        defaults(handlers, {
            will: noop, do: noop, did: noop
        });
        return Promise
            .resolve(params)
            .then(params => handlers.will(params))
            .then(params => handlers.do(params))
            .then(result => handlers.did(result));
    }


    //--------------------
    // Specs
    //--------------------

    //--------------------
    // Lifecycle
    //--------------------


};

module.exports = Object.freeze(ApCycleMixin);
