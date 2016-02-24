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
        s.setFormValues({
            [name]: value
        });
        if (props.onFormValueChange) {
            e.form = s.getFormValues();
            props.onFormValueChange(e);
        }
    },

    /**
     * Get form values.
     * @returns {object} - Values of form.
     */
    getFormValues(){
        let s = this,
            {state} = s;
        return state.formValues || {};
    },

    /**
     * Set form values.
     * @param {object} values - Values to set.
     */
    setFormValues(values){
        let s = this;
        let formValues = Object.assign(s.getFormValues(), values);
        s.setState({formValues});
    },

    //--------------------
    // Specs
    //--------------------

    propTypes: {
        onFormValueChange: type.func
    },

    getInitialState() {
        let s = this;
        return {
            formValues: null
        }
    },

    getDefaultProps() {
        return {
            onFormValueChange: null
        }
    },

    //--------------------
    // Lifecycle
    //--------------------


};

module.exports = Object.freeze(ApFormMixin);
