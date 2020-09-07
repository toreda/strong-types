import { dest, parallel, series, src } from 'gulp';

import { ArmorBuild } from '@armorjs/build';
import { EventEmitter } from 'events';

const build: ArmorBuild = new ArmorBuild(new EventEmitter());

function runLint() {
	return build.run.tslint();
}

function createDist() {
	return build.create.dir('./dist', false);
}

function cleanDist() {
	return build.clean.dir('./dist');
}

function buildSrc() {
	return build.run.typescript('./dist', 'tsconfig.json');
}

exports.default = series(createDist, cleanDist, runLint, buildSrc);