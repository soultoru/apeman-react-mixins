/**
 * Test case for apExceptionMixin.
 * Runs with mocha.
 */
"use strict";

const ApExceptionMixin = require('../lib/ap_exception_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-exception-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Ap exception mixin', (done) => {
        let Class01 = React.createClass({
            mixins: [ApExceptionMixin],
            render(){
                return React.createElement('div')
            },
            doHandleException(){

            },
            componentWillMount(){
                let s = this;
            }
        });
        let html = ReactDOM.renderToStaticMarkup(
            React.createElement(Class01, {})
        );
        assert.ok(html);
        done();
    });
});

