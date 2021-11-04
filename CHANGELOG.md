# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]




## [v0.27.0]

### Changed
* Strong Types now reset to `initialValue` rather than `fallbackDefault`. Prior to this change, the `fallbackDefault` guaranteed correct type returns, but also create a confusing edge case where Arrays could lose any pushed elements that were pushed after `reset` but before `set` is called.
* `ESLint` is now using the latest version (`v8.1.0`) and `resolutions` was removed from `package.json`. The shim was required due to an issue with `gulp-eslint` including multiple versions of `ESLint`  when any dependency in the project used an older `ESLint`.
* Upgraded package dependencies.
* Result value boundary checks for arithmetic functions `add`, `pow`, `sub`, `div`, and `mul`.

### Added
* `typeValue<T>`, `stringValue`, `booleanValue`, `numberValue`, and `arrayValue` which take a `value` and `fallback` arg. If `value` matches the expected type it's returned, otherwise `fallback` is returned. These helpers guarantee return type while reducing code overhead in systems which can't or don't use Strong Types.
* additional file patterns to `.npmignore`.
* missing tests for `swapPop`.

### Removed
* `gulp-eslint` is no longer during the build process. Linting has moved into `@toreda/build-tools` by invoking `ESLint` directly.

[v0.27.0]: https://github.com/toreda/strong-types/compare/v0.27.0...v0.1.0
[0.0.0]: https://github.com/toreda/strong-types/compare/v0.27.0...v0.1.0
[unreleased]: https://github.com/toreda/strong-types/compare/v0.0.0...HEAD
