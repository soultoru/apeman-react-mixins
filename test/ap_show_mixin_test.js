/**
 * Test case for apShowMixin.
 * Runs with mocha.
 */
"use strict";

const ApShowMixin = require('../lib/ap_show_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-show-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Ap show mixin', (done) => {
        const MockClass = React.createClass({
            mixins: [
                ApShowMixin
            ],
            render() {
                return null;
            }
        });
        let elm = React.createElement(MockClass, {});
        let html = ReactDOM.renderToString(elm);
        assert.ok(html);
        done();
    });
});

