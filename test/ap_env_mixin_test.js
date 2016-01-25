/**
 * Test case for apEnvMixin.
 * Runs with mocha.
 */
"use strict";

const ApEnvMixin = require('../lib/ap_env_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-env-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Ap env mixin', (done) => {

        const MockClass = React.createClass({
            mixins: [
                ApEnvMixin
            ],
            render(){
                let s = this;
                return React.createElement('div', {}, s.uuid);
            },
            componentWillMount(){
                let s = this;
                assert.ok(s.isProduction());
            }
        });

        let element = React.createElement(MockClass, {
            NODE_ENV: 'production'
        });
        let html = ReactDOM.renderToString(element);
        assert.ok(html);
        done();
    });
});

