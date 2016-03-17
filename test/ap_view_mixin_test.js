/**
 * Test case for apViewMixin.
 * Runs with mocha.
 */
"use strict";

const ApViewMixin = require('../lib/ap_view_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-view-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Render component', (done) => {

        const MockClass = React.createClass({
            mixins: [
                ApViewMixin
            ],
            render(){
                return React.createElement('div', {})
            },
            componentWillMount(){
                let s = this;
                s.pushViewToCurrentStack({}, {}, 'NONE');
                s.popViewFromCurrentStack({}, {}, 'NONE');
            }
        });
        let root = React.createElement(MockClass, {
            viewId: 124,
            viewWay: 'PUSH_LEFT',
            viewPop(){
                return Promise.resolve('hoge');
            },
            viewPush(){
                return Promise.resolve('hoge');
            },
            viewTop(){

            }
        });
        let html = ReactDOM.renderToString(root);
        assert.ok(html);
        done();
    });
});

