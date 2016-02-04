/**
 * Test case for apLayoutMixin.
 * Runs with mocha.
 */
"use strict";

const ApLayoutMixin = require('../lib/ap_layout_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-layout-mixin', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Ap layout mixin', (done) => {
        let Class01 = React.createClass({
            mixins: [ApLayoutMixin],
            render(){
                return React.createElement('div')
            },
            getInitialLayouts(){
                return {height: 100}
            },
            calcLayouts(){
                return null;
            },
            componentWillMount(){
                let s = this;
                assert.deepEqual(s.layouts, {height: 100});
            }
        });
        let html = ReactDOM.renderToStaticMarkup(
            React.createElement(Class01, {})
        );
        assert.ok(html);
        done();
    });
});

