/**
 * Test case for apTouchMixin.
 * Runs with mocha.
 */
"use strict";

const ApTouchMixin = require('../lib/ap_touch_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-touch-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Ap touch mixin', (done) => {

        const MockClass = React.createClass({
            mixins: [
                ApTouchMixin
            ],
            render(){
                let s = this;
                return React.createElement('div', {}
                );
            }
        });
        let root = React.createElement(MockClass, {
            onTap(){
            }
        });
        let html = ReactDOM.renderToString(root);
        assert.ok(html);
        done();
    });
});

