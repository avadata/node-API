/* eslint-disable import/no-extraneous-dependencies */
import runSequence from 'run-sequence';
import path from 'path';
import loadPlugins from 'gulp-load-plugins';
import registerTasks from 'gulp-tasks-registrator';

import env from './env.js';

const $ = loadPlugins({
    pattern: [
        'gulp',
        'gulp-*',
        'gulp.*',
        'del',
        'browserify',
        'vinyl-source-stream',
        'vinyl-buffer',
        'glob',
        'lodash',
        'merge-stream',
        'isparta',
        'mochify',
        'disc'
    ],
    scope: ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies'],
    replaceString: /^gulp(-|\.)/,
    rename: {
        del: 'delete'
    }
});

registerTasks({
    gulp: $.gulp,
    dir: path.join(__dirname, 'tasks'),
    args: [$, env],
    verbose: true,
    panic: true,
    group: true
});

runSequence.use($.gulp);

$.gulp.task('test', (done) => {
    return runSequence(
        'test:istanbul',
        'test:scripts',
        done
    );
});
