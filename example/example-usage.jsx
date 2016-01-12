"use strict";

import React from 'react';
import {ApLocaleMixin} from 'apeman-react-mixins';

let ExampleComponent = React.createClass({
    mixins: [
        ApLocaleMixin
    ],
    render () {
        let s = this,
            l = s.getLocale();
        return (
            <div>
                <span>{l.title}</span>
            </div>
        )
    }
});
