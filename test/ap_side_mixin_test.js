/**
 * Test case for apSideMixin.
 * Runs with mocha.
 */
"use strict";

const ApSideMixin = require('../lib/ap_side_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-side-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Ap side mixin', (done) => {
        const MockClass = React.createClass({
            mixins: [
                ApSideMixin
            ],
            render(){
                let s = this;
                return React.createElement('div', {}, s.uuid);
            },
            componentWillMount(){
                let s = this;
                assert.ok(s.isSeverSide());
            }
        });

        let element = React.createElement(MockClass, {
        });
        let html = ReactDOM.renderToString(element);
        assert.ok(html);
        done();
    });
});

