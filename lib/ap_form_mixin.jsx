/**
 * Mixin for form.
 * @constructor ApFormMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';

/** @lends ApFormMixin */
let ApFormMixin = {

    //--------------------
    // Custom
    //--------------------
    $apFormMixed: true,

    /**
     * Handle change of form input
     * @param {object} e - Input change event.
     */
    handleFormChange(e){
        let s = this,
            {props} = s;

        let {name, value} = e.target;
        let values = Object.assign(
            {}, props.formValues, {
                [name]: value
            }
        );

        if (props.onFormChange) {
            e.form = values;
            props.onFormChange(e);
        }
    },

    /**
     * Handle form submit.
     * @param {object} e - Submit event.
     */
    handleFormSubmit(e){
        let s = this,
            {props} = s;

        let values = props.formValues;
        if (props.onFormSubmit) {
            e.form = values;
            props.onFormSubmit(e);
        }
    },

    //--------------------
    // Specs
    //--------------------

    propTypes: {
        formValues: types.object,
        onFormChange: types.func,
        onFormSubmit: types.func
    },

    getDefaultProps() {
        return {
            formValues: null,
            onFormChange: null,
            onFormSubmit: null
        }
    }

    //--------------------
    // Lifecycle
    //--------------------


};

module.exports = Object.freeze(ApFormMixin);
