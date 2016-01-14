/**
 * This is an example to use ApTouchMixin.
 */
"use strict";

import React from 'react';
import {ApTouchMixin} from 'apeman-react-mixins';

let Component = React.createClass({
    mixins: [
        ApTouchMixin
    ],
    render () {
        return (
            <div>Touch me!</div>
        )
    }
});
let element = (<div>
    <Component >
    </Component>
</div>);

React.render(element, 'my-container', () => {
});
