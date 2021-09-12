# `@toreda/strong-types`

![CI](https://github.com/toreda/strong-types/workflows/CI/badge.svg?branch=master) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=toreda_strong-types&metric=coverage)](https://sonarcloud.io/dashboard?id=toreda_strong-types) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=toreda_strong-types&metric=alert_status)](https://sonarcloud.io/dashboard?id=toreda_strong-types)

Guaranteed types with validation in 1 line of code. Improve code quality & reliability while writing fewer lines of code.


What does it do?
```typescript
import {Int, makeInt} from '@toreda/strong-types';
//  int with initial value 10.
const int = makeInt(10);
// Prints 10. It always return an int.
console.log(int());

// Set the value
int(11);
// Prints 11.
console.log(int());

// Won't set the value - it's not an int.
int(null);
int(undefined);
int(3.33);
int({});

// Prints 11
console.log(int());
```
# Contents

* [**Basic Usage**](#basic-usage)
*	[**Built-in Types**](#built-in-types)
	  - [`StrongMap`](#StrongMap)
	  -	[`StrongArray`](#StrongArray)
	  - [`Bool`](#Bool)
	  - [`Double`](#Double)
	  - [`Int`](#Int)
	  - [`StrongString`](#StrongString)
	  - [`UInt`](#UInt)
*	[**Custom Types**](#custom-types)
	  - [Validators](#validators)
* 	[**Package**](#package)
	-	[Build](#build)
	-	[Testing](#testing)
	-   [License](#license)


# Using `StrongType`

Each built-in type exports a type and make function. The below examples use Int but work the same using: `StrongArray`, `Bool`, `Double`, `Int`, `StrongString`, and `UInt`.

## Instantiate with initial value
```typescript
import {Int, makeInt} from '@toreda/strong-types';

const initial = 11;
const fallback = 55;
const int = makeInt(initial, fallback);

// Returns 11 - initial value was 11.
const value = int();
```

## Instantiate without initial value



```typescript
import {Int, makeInt} from '@toreda/strong-types';

const fallback = 919;
const int = makeInt(null, fallback);

// value is 919 - initial value was null, so fallback was
// returned instead to maintain the function's return type guarantee.
const value = int();
```

## Get with Fallback
* `get(fallback: T): T`
Call `container.get(fallback)` when a per-call fallback is preferred instead of the container's default fallback.
```typescript
import {Int, makeInt} from '@toreda/strong-types';
const int = makeInt(null, 555);

const fallback = 331;
// Prints 331 (fallback) instead of 555 (container default fallback).
console.log(value.get(fallback));
```

## GetNull
* `getNull(): T | null`
Call `container.getNull()` to the current value, even if null. Value will never be undefined and will always return either null, or a value of container's generic type T.

NOTE: `getNull` **DOES NOT** take a fallback argument and will not return the container's default fallback. It always returns value (`null` or `StrongType<T>`).

```typescript
import {Int, makeInt} from '@toreda/strong-types';

const fallback = 919;
const int = makeInt(null, fallback);

// Prints null. Default fallback is not used for `getNull` calls.
console.log(int.getNull());
```

## Set Value
```
import {Int, makeInt} from '@toreda/strong-types';

const initial = 331;
const fallback = 400;
const int = makeInt(initial, fallback);

// value is 331 - the int's initial value.
const value = int();

// Set int to a new value.
int(555);

// value is 555 - the value we updated int to.
const value = int();

```

## Set `null`
```typescript
import {Int, makeInt} from '@toreda/strong-types';

const initial = 414;
const fallback = 500;
const int = makeInt(initial, fallback);

// value is 414 - the int's initial value.
const value = int();


// Set value to null.
int(null);

// value is 500 - Fallback returned because value was null.
const value = int();

```

## Reset Value

Call `myContainer.reset()` to reset value without creating a new StrongType container. Default Fallback will not be reset. Useful for unit testing and serverless environments where the previous container value or state is unknown.

```typescript
import {Int, makeInt} from '@toreda/strong-types';

const initial = 515;
const fallback = 600;
const int = makeInt(initial, fallback);

// value is 515 (the initial value).
const value = int();

// Reset container value
int.reset();

// Prints 600 (fallback). value was reset to null,
// fallback was returned to maintain return type guarantee.
console.log(int());

```

### Validation
`StrongType` containers validate value inputs before setting. Bad values are ignored and will not cause a throw. Each built-in container type provides specific guarantees for which values are allowed.

```typescript
import {Int, makeInt} from '@toreda/strong-types';
const int = makeInt(50, 100);

// success is false.
// container.value is still it's initial value 50 because 1.5 is not an int.
// Int does not round or truncate non-integers. They are simply ignored.
const success = int(1.5);
```


# Supported Types
* [`StrongArray`](#StrongArray), arrays
* [`Bool`](#Bool), booleans (strict)
* [`Double`](#Double), doubles
* [`Int`](#Int), integers
* [`UInt`](#StrongUint), unsigned integers
* [`StrongString`](#StrongString) - strings

# Using `StrongMap`

Creating and using a StrongMap class.
```typescript
import {StrongMap, Int, StrongString, makeInt, makeString} from '@toreda/strong-types';


export class SomeConfig extends StrongMap {
	public readonly counter: Int;
	public readonly name: StrongString;

	constructor(json: any) {
		super();
		this.counter = makeInt(0, 0);
		this.name = makeString(null, 'TreeBeard');
		this.parse(json);
	}
}


// Use it
const myConfig = new SomeConfig();

// Prints '0'
console.log(myConfig.counter());

// Prints 'Treebeard'
console.log(myConfig.name());
```

Creating a `StrongMap` and loading values from JSON
```typescript
import {StrongMap, StringInt, StrongString, makeInt, makeString} from '@toreda/strong-types';

export class SomeConfig extends StrongMap {
	public readonly counter: Int;
	public readonly name: StrongString;

	constructor(json?: any) {
		super();
		this.counter = makeInt(0, 0);
		this.name = makeString(null, 'TreeBeard');
		this.parse(json);
	}
}

const myJSON = {
	'counter': 99,
	'name': 'Sauron'
};

// Load the recursively parse a JSON object.
const myConfig = new SomeConfig(myJSON);

// Prints 99 - myJSON.counter was loaded into SomeConfig.counter at instantiation.
console.log(myConfig.counter());

// Prints 'Sauron' - myJSON.name was loaded into SomeConfig.name at instantiation.
console.log(myConfig.name());
```

Converting a `StrongMap` to a json object
```typescript
import {StrongMap, StringInt, StrongString, makeInt, makeString} from '@toreda/strong-types';

export class SomeConfig extends StrongMap {
	public readonly counter: Int;
	public readonly name: StrongString;

	constructor(json?: any) {
		super();
		this.counter = makeInt(0, 0);
		this.name = makeString(null, 'TreeBeard');
		this.parse(json);
	}
}

const myJSON = {
	'counter': 99,
	'name': 'Sauron'
};

// Create the StrongMap with myJSON data
const myConfig = new SomeConfig(myJSON);

// Change a value in the StrongMap
myConfig.name('Gandalf');

// {counter: 99, name: 'Gandalf'}
const configAsJSON = myConfig.jsonify();
```

## `StrongArray`

### Import

```typescript
import {StrongArray, makeArray} from '@toreda/strong-types';
```

### Accepted Values
* Arrays holding any type (e.g. `T[]`)
* Accepts empty arrays (e.g. `[]`)


## `Bool`

### Import
```typescript
import {Bool, makeBoolean} from '@toreda/strong-types';
```

### Accepted Values
* Strict booleans: `true` or `false` only.
* No type coercion (e.g. `1` or `0` will be rejected).

## `Double`

### Import
```typescript
import {Double, makeDouble} from '@toreda/strong-types';
```

### Accepted Values
* `number` values between and including Number.MIN_VALUE and Number.MAX_VALUE.
* Rejects `NaN` values.

## `Int`

### Import ###
```typescript
import {Int, makeInt} from '@toreda/strong-types';
```
### Accepted Values ###
* `number` values between and including Number.MIN_VALUE and Number.MAX_VALUE.
* `NaN` values are rejected.


## `StrongString`

### Import
```typescript
import {StrongString, makeString} from '@toreda/strong-types';
```
### Accepted Values ###
* `string` values of any valid length.


## `UInt`

### Import
```typescript
import {UInt, makeUInt} from '@toreda/strong-types';
```

### Accepted Values ###
* Integers between and including 0 and `Number.MAX_SAFE_INTEGER`.
* Rejects numbers which are non-integers (e.g. `1.5`)
* Rejects `NaN`
* Rejected negative integers (e.g. `-22`).

# Custom Types
Each built-in type like `Int` and `UInt` are helper functions wrapping `Strong<T>`. They also apply validators which guarantee the `Strong<T>` value behaves as expected. While built-ins are provided for convenience, you can create custom types with your own validators.

## Instantiate `Strong<T>`

```typescript
import {Strong, makeStrong} from '@toreda/strong-types';

export type MyOwnType = {
	id: string | null;
	name: string | null;
};

const initial: MyOwnType = {
	id: 'hello',
	name: 'my name is'
};

const fallback: MyOwnType = {
	id: null,
	name: null
};

const myObj = makeStrong<MyOwnType>(initial, fallback);

```

## Validators


# Install
Install `@toreda/strong-types` directly from NPM or [clone the Github repo](https://github.com/toreda/strong-types).

### Install using Yarn (preferred)
 1. Open a shell (or console).
 2. Navigate to the the StrongTypes root project folder.
 3. Enter the following commands in order. Wait for each to complete before typing the next.
```bash
yarn
```

### Install using NPM
 1. Open a shell (or console).
 2. Navigate to the the StrongTypes root project folder.
 3. Enter the following commands in order. Wait for each to complete before typing the next.
```bash
npm install
```


# Run Unit Tests
Install or clone StrongTypes [(see above)](#install).

StrongTypes tests are written with [Jest](https://jestjs.io/) which is also a project dev dependency.

Installing jest is not required after project dependencies are installed ([see above](#install)).
```bash
yarn test
```

# Build from source

The next steps are the same whether you installed the package using NPM or cloned the repo from Github.

### Build with Yarn
 Enter the following commands in order from the StrongTypes root project folder.
```bash
yarn build
```

### Build with NPM
 Enter the following commands in order from the StrongTypes root project folder.
```bash
npm run-script build
```

# License

[MIT](LICENSE) &copy; Toreda, Inc.
