/**
 * Test case for apUUIDMixin.
 * Runs with mocha.
 */
"use strict";

const ApUUIDMixin = require('../lib/ap_u_u_i_d_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-u-u-i-d-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Ap u u i d mixin', (done) => {
        const MockClass = React.createClass({
            mixins: [
                ApUUIDMixin
            ],
            render(){
                let s = this;
                return React.createElement('div', {}, s.uuid);
            }
        });

        let element = React.createElement(MockClass, {});
        let html = ReactDOM.renderToString(element);
        assert.ok(html);
        done();
    });
});

