/**
 * Test case for apCycleMixin.
 * Runs with mocha.
 */
"use strict";

const ApCycleMixin = require('../lib/ap_cycle_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-cycle-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Ap cycle mixin', (done) => {
        const MockClass = React.createClass({
            mixins: [
                ApCycleMixin
            ],
            render(){
                let s = this;
                return React.createElement('div', {}, s.uuid);
            },
            componentWillMount(){
                let s = this;
                s.cycle('hoge', {
                    will: value => value + ':will',
                    do: value => value + ':do',
                    did: value => value + ':did'
                }).then(value => {
                    assert.equal(value, "hoge:will:do:did");
                });
            }
        });

        let element = React.createElement(MockClass, {});
        let html = ReactDOM.renderToString(element);
        assert.ok(html);
        done();
    });
});

