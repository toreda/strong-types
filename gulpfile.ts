import {series, src} from 'gulp';

import {BuildTools} from '@toreda/build-tools';
import {EventEmitter} from 'events';
const eslint = require('gulp-eslint');

const build: BuildTools = new BuildTools(new EventEmitter());

function runLint() {
	return (
		src(['src/**'])
			// eslint() attaches the lint output to the "eslint" property
			// of the file object so it can be used by other modules.
			.pipe(eslint())
			// eslint.format() outputs the lint results to the console.
			// Alternatively use eslint.formatEach() (see Docs).
			.pipe(eslint.format())
			// To have the process exit with an error code (1) on
			// lint error, return the stream and pipe to failAfterError last.
			.pipe(eslint.failAfterError())
	);
}

function createDist() {
	return build.steps.createDir('./dist');
}

function cleanDist() {
	return build.steps.cleaner.dir('./dist');
}

function buildSrc() {
	return build.run.typescript('./dist', 'tsconfig.json');
}

exports.default = series(createDist, cleanDist, runLint, buildSrc);
