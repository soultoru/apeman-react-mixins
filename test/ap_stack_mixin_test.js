/**
 * Test case for apStackMixin.
 * Runs with mocha.
 */
"use strict";

const ApStackMixin = require('../lib/ap_stack_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    ApViewStack = require('apeman-react-view')['ApViewStack'],
    assert = require('assert');

describe('ap-stack-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Ap stack mixin', (done) => {
        const MockClass = React.createClass({
            mixins: [
                ApStackMixin
            ],
            render(){
                let s = this;
                return React.createElement('div', {}
                );
            }
        });
        let root = React.createElement(MockClass, {
            stacker: new (ApViewStack.Stacker)()
        });
        let html = ReactDOM.renderToString(root);
        assert.ok(html);
        done();
    });
});

