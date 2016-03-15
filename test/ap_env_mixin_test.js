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
                return React.createElement('div', {
                }, s.props.children);
            },
            componentWillMount(){
                let s = this;
                assert.equal(s.getEnv(), 'production');
                assert.ok(s.isProductionEnv());
            }
        });

        let grandChild = React.createElement(MockClass, {});
        let child = React.createElement(MockClass, {}, grandChild);
        let parent = React.createElement(MockClass,
            {
                NODE_ENV: 'production'
            },
            child
        );

        let html = ReactDOM.renderToString(parent);
        assert.ok(html);
        console.log(html);
        done();
    });
});

