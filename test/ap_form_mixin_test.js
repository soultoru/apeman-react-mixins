/**
 * Test case for apFormMixin.
 * Runs with mocha.
 */
"use strict";

const ApFormMixin = require('../lib/ap_form_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-form-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Ap form mixin', (done) => {

        const MockClass = React.createClass({
            mixins: [
                ApFormMixin
            ],
            render(){
                let s = this;
                return React.createElement('div', {},
                    s.props.children
                );
            },
            componentWillMount(){
                let s = this;
                assert.ok(s.handleFormChange);
                assert.ok(s.handleFormSubmit);

                let formValues = s.getFormValues();
                assert.equal(formValues.foo, 'formatted:bar');
            },
            formatFormValues(value) {
                return Object.assign(value, {
                    foo: "formatted:" + value.foo
                });
            }
        });
        let root = React.createElement(MockClass, {
            formValues: {'foo': 'bar'}
        });
        let html = ReactDOM.renderToString(root);
        assert.ok(html);
        done();
    });
});

