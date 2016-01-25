/**
 * Mixin to add uuid.
 * @constructor ApUUIDMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';
import uuid from 'uuid';

/** @lends ApUUIDMixin */
let ApUUIDMixin = {

    //--------------------
    // Custom
    //--------------------
    $apUUIDMixed: true,

    uuid: null,

    //--------------------
    // Specs
    //--------------------

    //--------------------
    // Lifecycle
    //--------------------

    componentWillMount() {
        let s = this;
        s.uuid = s.uuid || uuid.v4();
    }
};

module.exports = Object.freeze(ApUUIDMixin);
