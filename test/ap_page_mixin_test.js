/**
 * Test case for apPageMixin.
 * Runs with mocha.
 */
"use strict";

const ApPageMixin = require('../lib/ap_page_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-page-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Ap page mixin', (done) => {
        let MockClass = React.createClass({
            mixins: [
                ApPageMixin
            ],
            render(){
                return React.createElement('div', {});
            },
            componentWillMount(){
                let s = this;
            },
            pageStackViewDidPush(){

            },
            pageStackViewDidPop(){

            }
        });
        let root = React.createElement(MockClass),
            html = ReactDOM.renderToString(root);
        assert.ok(html);
        done();
    });
});

