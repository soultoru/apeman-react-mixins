/**
 * Test case for apSpinMixin.
 * Runs with mocha.
 */
"use strict";

const ApSpinMixin = require('../lib/ap_spin_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-spin-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Ap spin mixin', (done) => {

        const MockClass = React.createClass({
            mixins: [
                ApSpinMixin
            ],
            render(){
                let s = this;
                return React.createElement('div', {},
                    s.props.children
                );
            }
        });
        let root = React.createElement(MockClass, {});
        let html = ReactDOM.renderToString(root);
        assert.ok(html);
        done();
    });
});

