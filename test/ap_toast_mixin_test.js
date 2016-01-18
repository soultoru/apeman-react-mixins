/**
 * Test case for apToastMixin.
 * Runs with mocha.
 */
"use strict";

const ApToastMixin = require('../lib/ap_toast_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-toast-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });

    it('Toaster', (done) => {
        let toaster = new (ApToastMixin.statics.Toaster)({});
        assert.ok(toaster);
        done();
    });

    it('Ap toast mixin', (done) => {

        const MockClass = React.createClass({
            mixins: [
                ApToastMixin
            ],
            render(){
                let s = this;
                return React.createElement('div', {});
            },
            componentWillMount(){
                let s = this;
                s.initToaster();
                s.toast('hoge');
            }
        });

        let root = React.createElement(MockClass);
        let html = ReactDOM.renderToString(root);
        assert.ok(html);
        done();
    });
});

