/**
 * Test case for apLocaleMixin.
 * Runs with mocha.
 */
"use strict";

const ApLocaleMixin = require('../lib/ap_locale_mixin.js'),
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    assert = require('assert');

describe('ap-locale-mixin', () => {


    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Render component.', (done) => {

        const MockClass = React.createClass({
            mixins: [
                ApLocaleMixin
            ],
            render(){
                let s = this;
                let locale = s.getLocale() || {};
                return React.createElement('div', {},
                    s.props.children,
                    locale.foo
                );
            }
        });


        let grandChild = React.createElement(MockClass, {});
        let child = React.createElement(MockClass, {
            locale: {foo: 'baz'}
        }, grandChild);
        let parent = React.createElement(MockClass,
            {
                locale: {foo: 'bar'}
            },
            child
        );
        let root = React.createElement('div', {}, parent);
        let html = ReactDOM.renderToString(root);
        assert.ok(html);
        done();
    });
});

