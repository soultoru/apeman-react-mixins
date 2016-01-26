/**
 * This is an example to use ApSideMixin.
 */
"use strict";

import React from 'react';
import {ApSideMixin} from 'apeman-react-mixins';

let Component = React.createClass({
    mixins: [
        ApSideMixin
    ],
    render () {
        let s = this;
        return (
            <div>{s.isClientSide() ? 'Client' : 'Server'}</div>
        )
    }
});
let element = (<div>
    <Component>
    </Component>
</div>);

React.render(element, 'my-container', () => {
});
