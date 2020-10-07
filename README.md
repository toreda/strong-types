# `@toreda/strong-types`

![CI](https://github.com/toreda/strong-types/workflows/CI/badge.svg?branch=master) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=toreda_strong-types&metric=coverage)](https://sonarcloud.io/dashboard?id=toreda_strong-types) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=toreda_strong-types&metric=alert_status)](https://sonarcloud.io/dashboard?id=toreda_strong-types)

Native TypeScript containers for generic value storage. Reliably store and retrieve typed values without writing validation or type checking code. Use [built-in types](#BuiltInTypes) or define your own.


What does it do?
```typescript
import {StrongInt, makeInt} from '@toreda/strong-types';
//  int with initial value 10.
const int = makeInt(10, 0);
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
	  - [`StrongBoolean`](#StrongBoolean)
	  - [`StrongDouble`](#StrongDouble)
	  - [`StrongInt`](#StrongInt)
	  - [`StrongStrongring`](#StrongStrongring)
	  - [`StrongUInt`](#StrongUInt)
*	[**Custom Types**](#custom-types)
	  - [Validators](#Validators)
* 	[**Package**](#Package)
	-	[Build](#Build)
	-	[Testing](#testing)
	-   [License](#license)


# Strong Type Basic Usage

## Set value
```typescript
// Set value to string 'trendy'
myValue('trendy');
```

## Set value to null
```typescript
// Set value to be null.
myValue(null);
```

## Reset
Reset will set value to null without using set functionality.
```typescript
// set kvp to hello
myValue('hello');

// Outputs hello
myValue();

// value will become null.
myValue.reset();
```


# Supported Types
* [`StrongArray`](#StrongArray), arrays
* [`StrongBoolean`](#StrongBoolean), booleans (strict)
* [`StrongDouble`](#StrongDouble), doubles
* [`StrongInt`](#StrongInt), integers
* [`StrongUInt`](#StrongUint), unsigned integers
* [`StrongString`](#StrongString) - strings

# Strong Map Basic Usage

Creating a `StrongMap`
```typescript
import {StrongMap, StringInt, StrongString, makeInt, makeString} from '@toreda/strong-types';


export class SomeConfig extends StrongMap {
	public readonly counter: StrongInt;
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
	public readonly counter: StrongInt;
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

## `StrongArray`

## `StrongBoolean`

## `StrongDouble`

## `StrongInt`

#### Instantiation
```typescript
import {StrongInt, makeInt} from '@toreda/strong-types';
const initial = 11;
const fallback = 55;
const int = makeInt(initial, fallback);

// Returns 11 - initial value was 11.
const value = StrongInt();
```

#### Default Fallback
```typescript
import {StrongInt, makeInt} from '@toreda/strong-types';
const initial = null;
const fallback = 101;
const uint = makeInt(initial, fallback);

// Returns 101 - current value is null (no value set).
const value = uint();
```

#### Fallback
```typescript
import {StrongInt, makeInt} from '@toreda/strong-types';
const int = makeInt(null, 201);

// kvp.get(fallback) returns the fallback argument when the kvp instance
// has no value set.
const fallback = 11;
// Returns 11 - value is currently null.
const value = int.get(fallback);

// Set value to 500.
int(500);
// value is set to 500, because value is now a valid int with value 100.
const value = int.get(fallback);
```

#### Validation
StrongInt will not update t's value called with a positive or negative integer.
```typescript
import {StrongInt, makeInt} from '@toreda/strong-types';
const uint = makeInt(50, 100);

// Attempting to set value to a negative integer.
// Success will be false.
const success = uint(1.5);

// value is still 50. 1.5 is not an integer.
const value = uint();
```


##### Individual Fallbacks
```typescript
import {StrongUInt, makeUInt} from '@toreda/strong-types';
const uint = makeUInt(null, 30);

// kvp.get(fallback) returns the fallback when the kvp
// has no value set.
const fallback = 25;
// Returns 25 because value is currently null.
const value = uint.get(fallback);

// Set value to 100.
uint(100);
// value is set to 100, because value is now a valid int with value 100.
const value = uint.get(fallback);
```

##### Type Validation
StrongUInt performs automatic input validation and will not update it's value unless the provided input is an unsigned integer.
```typescript
import {StrongUInt, makeUInt} from '@toreda/strong-types';
const uint = makeUInt(20, 40);

// Attempting to set value to a negative integer.
// Success will be false.
const success = uint(-10);

// value is still initial value 20 because -10 above is not an
// unsigned integer. No errors on thrown on invalid input.
const value = uint();
```



### Create value
```typescript
import {StrongType, makeStrong} from '@toreda/strong-types';
const initial = 'hello';
const fallbackDefault = 'goodbye';
const myValue = makeStrong<string>(initial, fallbackDefault);
```

### Get value
```typescript
// Returns current value, or fallback when value is null.
const value = myValue();
```

### Get value with custom fallback
```typescript
// value set to 'hello' as shown above.
const fallback = 'goodbye again';
// Returns value if set, or fallback otherwise.
const value = myValue.get(fallback);
```

## `StrongString`


## `StrongUInt`
Accepts positive integer values only. Everything else will be rejected and will not update the value.

##### Instantiation
```typescript
import {StrongUInt, makeUInt} from '@toreda/strong-types';
// UInt starting value.
const initial = 44;
const fallbackDefault = 1;
const uint = makeUInt(initialValue, fallbackDefault);

// Get the current value 44.
const uintValue = uint();

// Set value to 14.
uint(14);
```

##### Using the Fallback Default
```typescript
import {StrongUInt, makeUInt} from '@toreda/strong-types';
const initialValue = null;
const fallbackDefault = 27;
const uint = makeUInt(initialValue, fallbackDefault);

// Returns 27. Getting the current value with uint() guarantees a type-safe return value.
// When the current value is null (not set), the default fallback is returned instead.
const value = uint();
```

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
