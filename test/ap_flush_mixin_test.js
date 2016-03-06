/**
 * Test case for apFlushMixin.
 * Runs with mocha.
 */
"use strict";

const ApToastMixin = require('../lib/ap_toast_mixin.js'),
    ApFlushMixin = require('../lib/ap_flush_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-flush-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Ap flush mixin', (done) => {

        const MockClass = React.createClass({

            mixins: [
                {
                    componentWillMount(){
                        let s = this;
                        s.registerToaster({});
                    }
                },
                ApFlushMixin,
                ApToastMixin
            ],
            render(){
                return React.createElement('div', {});
            },

        });

        let elm = React.createElement(MockClass, {});
        let html = ReactDOM.renderToString(elm);
        assert.ok(html);
        done();
    });
});

