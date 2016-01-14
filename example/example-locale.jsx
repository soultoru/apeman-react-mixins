/**
 * This is an example to use ApLocaleMixin.
 */
"use strict";

import React from 'react';
import {ApLocaleMixin} from 'apeman-react-mixins';

let Parent = React.createClass({
    mixins: [
        ApLocaleMixin
    ],
    render () {
        let s = this,
            l = s.getLocale();
        return (
            <div>
                <span>This is parent of {l.title}</span>
            </div>
        )
    }
});


let Child = React.createClass({
    mixins: [
        ApLocaleMixin // Add the mixin
    ],
    render () {
        let s = this,
            l = s.getLocale(); // Get locale registered in parent.
        return (
            <div>
                <span>This is child of {l.title}</span>
            </div>
        )
    }
});

let locale = {title: 'My awesome app'}; // Message resources.
let element = (<div>
    <Parent locale={locale}>
        <Child />
    </Parent>
</div>);

React.render(element, 'my-container', () => {
});
