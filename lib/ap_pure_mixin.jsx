/**
 * Thin wrapper for PureRenderMixin
 */
"use strict";

const PureRenderMixin = require('react-addons-pure-render-mixin');

const ApPureMixin = {
    $apPureMixed: true,
    /**
     * Shallow compare props and states.
     */
    shouldComponentUpdate: PureRenderMixin.shouldComponentUpdate
};

module.exports = Object.freeze(ApPureMixin);