/**
 * Test case for apOutsideMixin.
 * Runs with mocha.
 */
"use strict";

const ApOutsideMixin = require('../lib/ap_outside_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-outside-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Ap outside mixin', (done) => {

        const MockClass = React.createClass({
            mixins: [
                ApOutsideMixin
            ],
            render(){
                let s = this;
                return React.createElement('div', {},
                    s.props.children
                );
            },
            componentWillMount(){
                let s = this;
            }
        });
        let elm = React.createElement(MockClass, {
        });
        let root = React.createElement('div', {}, elm);
        let html = ReactDOM.renderToString(root);
        assert.ok(html);
        done();
    });
});

