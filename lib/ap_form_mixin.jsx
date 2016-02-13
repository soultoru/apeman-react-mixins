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
     * @param {Event} e - Input change event.
     */
    handleFormChange(e){
        let s = this;

        let {name, result, value} = e.target;
        s.setFormValues({
            [name]: result || value
        });
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

    getInitialState() {
        let s = this;
        return {
            formValues: null
        }
    }

    //--------------------
    // Lifecycle
    //--------------------


};

module.exports = Object.freeze(ApFormMixin);
