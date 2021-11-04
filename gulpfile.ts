import {Levels, Log} from '@toreda/log';
import {series, src} from 'gulp';

import {Build} from '@toreda/build-tools';
import {EventEmitter} from 'events';

const log = new Log({
	globalLevel: Levels.ALL,
	consoleEnabled: true
});

const build: Build = new Build({
	log: log,
	events: new EventEmitter()
});

async function runLint(): Promise<NodeJS.ReadWriteStream> {
	const summary = await build.linter.execute({
		formatterId: 'stylish',
		srcPatterns: ['./src/**.ts', './src/**/**.ts']
	});

	return src(['*'], {
		read: false
	});
}

function createDist(): Promise<NodeJS.ReadWriteStream> {
	return build.gulpSteps.createDir('./dist', true);
}

function cleanDist(): Promise<NodeJS.ReadWriteStream> {
	return build.gulpSteps.cleanDir('./dist', true);
}

function buildSrc(): Promise<NodeJS.ReadWriteStream> {
	return build.run.typescript('./dist', 'tsconfig.json');
}

exports.default = series(createDist, cleanDist, runLint, buildSrc);
