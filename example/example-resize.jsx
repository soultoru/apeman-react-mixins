/**
 * This is an example to use ApResizeMixin.
 */
"use strict";

import React from 'react';
import {ApResizeMixin} from 'apeman-react-mixins';

let Component = React.createClass({
    mixins: [
        ApResizeMixin
    ],
    render () {
        return (
            <div>Foo</div>
        )
    },
    /** Handler of window resize event */
    windowDidResize(e){
        /*..*/
    }

});
let element = (<div>
    <Component>
    </Component>
</div>);

React.render(element, 'my-container', () => {
});
