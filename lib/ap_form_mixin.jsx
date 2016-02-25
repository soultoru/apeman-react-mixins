/**
 * Mixin for form.
 * @constructor ApFormMixin
 */

"use strict";

import React, {PropTypes as types} from 'react';
import ReactDOM from 'react-dom';

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
            e = e || {};
            e.target = e.target || ReactDOM.findDOMNode(s);
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
            e = e || {};
            e.target = e.target || ReactDOM.findDOMNode(s);
            e.form = values;
            props.onFormSubmit(e);
        }
    },

    /**
     * Handle form cancel.
     * @param {object} e - Submit event.
     */
    handleFormCancel(e){
        let s = this,
            {props} = s;

        let values = props.formValues;
        if (props.onFormCancel) {
            e = e || {};
            e.target = e.target || ReactDOM.findDOMNode(s);
            e.form = values;
            props.onFormCancel(e);
        }
    },


    /**
     * Get a form value.
     * @param {string} name - Name of the value.
     * @returns {*} - Value
     */
    getFormValue(name){
        let s = this;
        let values = s.getFormValues();
        return values && values[name] || null;
    },

    /**
     * Get form values.
     * @returns {*|null|string}
     */
    getFormValues(){
        let s = this,
            {props} = s;

        return props.formValues || null;
    },

    /**
     * Wrap as form handler.
     * @param {function} handler - A handler.
     * @param {object} options - Optional setttings
     * @returns {formWrap}
     */
    asFormHandler(handler, options){
        let s = this;
        options = options || {};
        let key = options.key || 'default';
        if (!handler) {
            return null;
        }
        handler.formWrap = handler.formWrap || {};
        handler.formWrap[key] = handler.formWrap[key] || function formWrap(e) {
                e = Object.assign(e || {}, {
                    form: s.getFormValues()
                }, options);
                handler.call(s, e);
            };
        return handler.formWrap[key];

    },

    //--------------------
    // Specs
    //--------------------

    propTypes: {
        formValues: types.object,
        onFormChange: types.func,
        onFormSubmit: types.func,
        onFormCancel: types.func
    },

    getDefaultProps() {
        return {
            formValues: null,
            onFormChange: null,
            onFormSubmit: null,
            onFormCancel: null
        }
    }

    //--------------------
    // Lifecycle
    //--------------------


};

module.exports = Object.freeze(ApFormMixin);
