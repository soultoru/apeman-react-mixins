/**
 * Test case for apHistoryMixin.
 * Runs with mocha.
 */
"use strict";

const ApHistoryMixin = require('../lib/ap_history_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-history-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Ap history mixin', (done) => {
        const MockClass = React.createClass({
            mixins: [
                ApHistoryMixin
            ],
            render(){
                let s = this;
                return React.createElement('div', {}, s.uuid);
            },
            componentWillMount(){
            }
        });
        let element = React.createElement(MockClass, {
        });
        let html = ReactDOM.renderToString(element);
        assert.ok(html);
        done();
    });
});

