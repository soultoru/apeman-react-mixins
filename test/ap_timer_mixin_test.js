/**
 * Test case for apTimerMixin.
 * Runs with mocha.
 */
"use strict";

const ApTimerMixin = require('../lib/ap_timer_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-timer-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Ap timer mixin', (done) => {
        const MockClass = React.createClass({
            mixins: [
                ApTimerMixin
            ],
            render(){
                return React.createElement('div', {});
            },
            componentWillMount(){
                let s = this;
                s.setTimer('hoge', 200).then(() => {
                    done();
                });
            }
        });

        let elm = React.createElement(MockClass, {});
        let html = ReactDOM.renderToString(elm);
        assert.ok(html);

    });
});

