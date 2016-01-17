/**
 * Mixin to add uuid.
 * @constructor ApUuidMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';
import uuid from 'uuid';

/** @lends ApUuidMixin */
let ApUuidMixin = {

    //--------------------
    // Custom
    //--------------------

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

module.exports = Object.freeze(ApUuidMixin);
