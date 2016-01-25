/**
 * This is an example to use ApEnvMixin.
 */
"use strict";

import React from 'react';
import {ApEnvMixin} from 'apeman-react-mixins';

let Component = React.createClass({
    mixins: [
        ApEnvMixin
    ],
    render () {
        let s = this;
        return (
            <div>{s.isProduction() ? null : 'Hi, there'}</div>
        )
    }
});
let element = (<div>
    <Component NODE_ENV={process.env.NODE_ENV}>
    </Component>
</div>);

React.render(element, 'my-container', () => {
});
