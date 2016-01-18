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
            },
            componentWillMount(){
                let s = this;
                assert.ok(!s.hasSpin('hoge'));
                s.incrementSpinCount('hoge');
                s.incrementSpinCount('fuge');
                assert.ok(s.hasSpin('hoge'));
                assert.ok(s.hasSpin('fuge'));
                assert.equal(s.getSpinCount('hoge'), 1);
                s.decrementSpinCount('hoge');
                assert.ok(!s.hasSpin('hoge'));
                assert.equal(s.getSpinCount('hoge'), 0);
                assert.ok(s.hasSpin('fuge'));
                s.resetSpinCount('fuge');
                assert.equal(s.getSpinCount('fuge'), 0);
                assert.ok(!s.hasSpin('fuge'));
            }
        });
        let root = React.createElement(MockClass, {});
        let html = ReactDOM.renderToString(root);
        assert.ok(html);
        done();
    });
});

