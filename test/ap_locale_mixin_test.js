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

        const mockLocale = {
            foo: 'This is foo',
            bar: {'baz': 'This is baz'}
        };
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
            },
            componentWillMount(){
                let s = this;
                s.registerLocale(s.props.locale);

                let locale = s.getLocale();
                assert.equal(typeof(locale), 'function');
                assert.equal(locale('bar.baz'), 'This is baz');
            }
        });

        let grandChild = React.createElement(MockClass, {
            locale: mockLocale
        });
        let child = React.createElement(MockClass, {
            locale: mockLocale
        }, grandChild);
        let parent = React.createElement(MockClass,
            {
                locale: mockLocale
            },
            child
        );
        let root = React.createElement('div', {}, parent);
        let html = ReactDOM.renderToString(root);
        assert.ok(html);
        done();
    });
});

