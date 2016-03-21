/**
 * Test case for apServerMixin.
 * Runs with mocha.
 */
"use strict";

const ApServerMixin = require('../lib/ap_server_mixin.js').default,
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-server-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Ap server mixin', (done) => {
        const MockClass = React.createClass({
            mixins: [
                ApServerMixin
            ],
            render() {
                return null;
            },
            getServerEventSource(){
                return {};
            },
            getServerPollingConfig() {
                return {};
            },
            knockServer() {
                return null;
            }
        });
        let elm = React.createElement(MockClass, {});
        let html = ReactDOM.renderToString(elm);
        assert.ok(html);
        done();
    });
});

