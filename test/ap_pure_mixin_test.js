/**
 * Test case for apPureMixin.
 * Runs with mocha.
 */
"use strict";

const ApPureMixin = require('../lib/ap_pure_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-pure-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Ap pure mixin', (done) => {
        const MockClass = React.createClass({
            mixins: [
                ApPureMixin
            ],
            render(){
                return React.createElement('div', {})
            }
        });
        let root = React.createElement(MockClass, {
        });
        let html = ReactDOM.renderToString(root);
        assert.ok(html);
        done();
    });
});

