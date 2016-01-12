#!/usr/bin/env node

/**
 * Compile files.
 */

"use strict";

process.chdir(__dirname + '/..');

const apeTasking = require('ape-tasking'),
    async = require('async'),
    path = require('path'),
    expandglob = require('expandglob'),
    apeCompiling = require('ape-compiling'),
    fs = require('fs'),
    coz = require('coz');

apeTasking.runTasks('compile', [
    (callback) => {
        let libDir = __dirname + '/../lib';
        apeCompiling.compileReactJsx('*.jsx', {
            cwd: libDir,
            out: libDir,
            map: 'inline'
        }, callback);
    }
], true);
