/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const _ = require('lodash');
const argv = require('minimist')(process.argv.slice(2));

const ROOT_DIR = path.resolve(__dirname, '..');
const SRC_DIR = path.join(ROOT_DIR, 'services');

module.exports = {
    name: 'base',
    version: _.get(argv, 'V', _.get(argv, 'version', null)),
    registry: _.get(argv, 'r', _.get(argv, 'registry', null)),
    paths: {
        root: ROOT_DIR,
        input: {
            scripts: {
                main: `${SRC_DIR}/index.js`,
                src: [
                    `${SRC_DIR}/*.js`
                ]
            },
            test: {
                scripts: [
                    `${ROOT_DIR}/test/*.spec.js`
                ],
                exclude: [
                    `!${ROOT_DIR}/gulpfile.js`
                ]
            }
        },
        output: {
            coverage: `${ROOT_DIR}/coverage`
        }
    },
    thresholds: {
        coverage: {
            global: 0,
            each: 0
        },
        css: 800,
        js: 1000
    }
};
