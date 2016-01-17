/**
 * This is an example to use ApStackMixin.
 */
"use strict";

import React from 'react';
import {ApStackMixin} from 'apeman-react-mixins';

let Component = React.createClass({
    mixins: [
        ApStackMixin
    ],
    render () {
        let s = this;
        return (
            <div>{s.renderStack()}</div>
        )
    },

    stackedViewDidPush(view) {

    },

    stackedViewDidPop(view){

    }

});

let stacker = Component.Stacker(); // Create istance of ApViewStack.Stacker
stacker.pushView('div', {});

let element = (<div>
    <Component stacker={stacker}>
    </Component>
</div>);

React.render(element, 'my-container', () => {
});
