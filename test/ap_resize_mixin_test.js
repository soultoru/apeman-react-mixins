/**
 * Test case for apResizeMixin.
 * Runs with mocha.
 */
"use strict";

const ApResizeMixin = require('../lib/ap_resize_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-resize-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Ap resize mixin', (done) => {

        const MockClass = React.createClass({
            mixins: [
                ApResizeMixin
            ],
            render(){
                let s = this;
                return React.createElement('div', {}
                );
            }
        });
        let root = React.createElement(MockClass, {
            onResize(){
            }
        });
        let html = ReactDOM.renderToString(root);
        assert.ok(html);
        done();
    });
});

