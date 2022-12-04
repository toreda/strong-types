
[![Toreda](https://content.toreda.com/logo/toreda-logo.png)](https://www.toreda.com)


[![CI](https://img.shields.io/github/workflow/status/toreda/strong-types/CI?style=for-the-badge)](https://github.com/toreda/strong-types/actions) [![Coverage](https://img.shields.io/sonar/coverage/toreda_strong-types?server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge)](https://sonarcloud.io/project/activity?graph=coverage&id=toreda_strong-types) [![Sonar Quality Gate](https://img.shields.io/sonar/quality_gate/toreda_strong-types?server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge)](https://sonarcloud.io/dashboard?id=toreda_strong-types)

[![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/toreda/strong-types/master?style=for-the-badge)](https://github.com/toreda/strong-types/releases/latest) [![GitHub Release Date](https://img.shields.io/github/release-date/toreda/strong-types?style=for-the-badge)](https://github.com/toreda/strong-types/releases/latest) [![GitHub issues](https://img.shields.io/github/issues/toreda/strong-types?style=for-the-badge)](https://github.com/toreda/strong-types/issues)

 [![license](https://img.shields.io/github/license/toreda/strong-types?style=for-the-badge)](https://github.com/toreda/time/blob/master/LICENSE)

&nbsp;
# `@toreda/strong-types`

Guaranteed types with validation in 1 line of code. Improve code quality & reliability while writing fewer lines of code.


What does it do?
```typescript
import type {Int} from '@toreda/strong-types';
import {intMake} from '@toreda/strong-types';
//  int with initial value 10.
const int = intMake(10);
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

* [**Code Documentation**](/docs/index.html)
* [**StrongType API**](#strongtype-api)
* [**Data Types**](#data-types)
	- **Primary Types**
    	- [**`StrongMap`**](#StrongMap)
    	- [**`StrongArray`**](#StrongArray)
    	- [**`Bool`**](#Bool)
        	- Strict `true` or `false` values.
    	- [**`Dbl`**](#Dbl)
        	- Decimal values with arbitrary precision.
    	- [**`Float`**](#Float)
        	- Standard JavaScript `number` values with a `StrongType` wrapper.
    	- [**`Int`**](#Int)
        	- Positive & negative integers.
    	- [**`Text`**](#Text)
        	- String values
        - [**`UInt`**](#UInt)
          -  Unsigned integers.
    * [**Expressive Types**](#expressive-types)
      * `Email` - `string`
        * Email address with format `mailbox@domain`.
      * **`Date`** - `string`
        *  ISO standard date strings.
	  * `Id` - `string`
    	  * `string` with configurable value restrictions.
	  * `HexColorCode` - `string`
    	  * Any full or partial hex value representing a color code in `RGB` range (`#000000` to `#FFFFFF`).
  	  * `Port` - `unsigned integer`
    	  * Port number in the range `1` to `65535`.
      * `OS` - `OS Value`
        * Common OS platform names `android`, `darwin`, `linux`, and `windows`.
      * `Size` - `{width: float; height: float}`
        * Object with properties `float x` and `float y`.
      * `SystemPort` - `unsigned integer`
        * Port number in the eserved system port range `1` to `1024`.
      * `Time` - `string`
        * ISO standard `12h` or `24h` time value.
      * `Url` - `string`
        * Any valid absolute `Url` according to [`RFC-3986`](https://tools.ietf.org/html/rfc3986).
      * `Vec1` - `{x: float}`
        * Vector object with `float` validated property `float x`.
      * `Vec2` - `{x: float; y: float}`
        * Vector object with `float` validated properties `float x` and `float y`.
      * `Vec3` - `{x: float; y: float; z: float}`
        * Vector object with `float` validated properties `float x`, `float y`, and `float z`.
      * `Vec4` - `{x: float; y: float; z: float; w: float}`
        * Vector object with `float` validated properties `float x`, `float y`,  `float z`, and `float w`.
  * [**Examples**](#examples)
*	[**Conversion Functions**](#conversion-functions)
*	[**Custom Types**](#custom-types)
	  - [Validators](#validators)
* 	[**Package**](#package)
	-	[Build](#build)
	-	[Testing](#testing)
	-   [License](#license)

&nbsp;

# `StrongType` API

All types in this package implement the `StrongType` interface which provide

## General API

## All Types

### `get(fallback: ValueT): ValueT`
Get current value. The provided `fallback` is returned when `StrongType` has no current value. Always returns a type `ValueT` value.

### `getNull(): ValueT | null`
Get and return current value if set, otherwise returns `null`. Useful when you need to know if there is a current value.

### `check(value?: ValueT): boolean`
Check whether `value` is passes validation as type `ValueT`. Called by `set(...)` internally, but allows value validation before setting.

### `reset(): void`
Reset current value to `null`. Useful for testing, Lamba environments, and object pools.

&nbsp;

## Numeric Types

### **Add `add(input: ValueT): ValueT | null`**
Add `input` to `value` (`value + input`).


#### **Returns**
* `null` when `result` value is not a valid `ValueT`.
  * ex: `uint.add(-1)` returns `null` when `value` is `0`.  `0 + -1` is `-1` and not a valid `UInt`.
  * ex: `int.add(1)` returns `null

&nbsp;

### **Subtract `sub(input: ValueT): ValueT | null`***
Subtract `input` from `value` (`value - input`).

#### **Returns**
* `null` when `result` is not a valid `ValueT`.
  * ex: `uint.sub(1)` returns `null` when `value` is `0`, because `-1` is not a valid `UInt`.
* `result` of subtraction when operation succeeds and result is a valid `ValueT`.

&nbsp;
### **Multiply `mul(input: ValueT): ValueT | null`**
Multiply `value` by `input`.

#### **Returns**
* `null` if result of multiplication is not a valid `ValueT`.
* `0` when either number is `0`.

&nbsp;

### **Divide `div(input: ValueT): ValueT | null`**
Divide `value` by `input`.

#### **Returns**
* `null` when `result` is not a valid `ValueT`
  * ex: `uint.mul(-1)` will always return `null` because `UInt` cannot be < `0`.
* `result` of divsion when operation succeeds.
* `0` when either `value` or `input` is `0`.
* `null` when `StrongType` has no current value.

&nbsp;

### `pow(n: ValueT): ValueT | null`
Raise `value` to the `n`th power.

#### **Returns**
* `null` when current value is `null`.
* `null` when `result` value is too big, or too small for `ValueT`.
* `result` of `valueⁿ` if `result` is a valid `ValueT`.


&nbsp;

### `increment(): ValueT | null`
Increment value by 1 if `StrongType` has a value. Returns `null` when increment is not successful.

### **Returns**
* `null` when `result` of `value + 1` is not a valid `ValueT`.
* `null` when `StrongType` has no value.
* `result` when `increment` succeeds.

&nbsp;

### `decrement(): ValueT | null`
Decrease value by 1 if `StrongType` has a value.  Returns `null` when decrement is not successful.

#### **Returns**
* `null` when result of `value - 1` is not a valid `ValueT`.
* `null` when `StrongType` has no value.
* `result` when `decrement` succeeds.

&nbsp;

# Data Types

# `StrongArray<T>`
Strict `Array` type.

### **Accepts**
* Arrays matching type `T` provided to `StrongArray<T>` during init.
### **Rejects**
* Non-array values.


## Make a `StrongArray<T>`
```typescript
import type {StrongArray} from '@toreda/strong-types';
import {arrayMake} from '@toreda/strong-types';

// Create a new StrongArray of type string[].
// Fallback value is an empty array.
const arr = arrayMake<string>([]);
```
&nbsp;

# `Bool`
Strict **`boolean`** values.

&nbsp;
### **Accepts**
* `true`
* `false`

### **Rejects**
* Everything else (no type coercion).

&nbsp;
## Making `Bool`

```typescript
import type {Bool} from '@toreda/strong-types';
import {boolMake} from '@toreda/strong-types';

// Create bool with fallback `false`.
// No initial value set.
const bool = boolMake(false);
```

&nbsp;
## Get `Bool`

Get the current value invoking the `Bool` object directly, calling `bool.get(fallback)`, or `bool.getNull()`.

&nbsp;
## Invoke `Bool`
All `StrongType` objects are also functions. Call the function without args to return the current value.


&nbsp;

**Create bool with fallback `false` & no initial value:**
```typescript
// Create bool with:
//	fallbackDefault		-	false
//	value				-	null (not provided)
const bool = boolMake(false);

// Prints 'false'
console.log(bool());
```

&nbsp;

**Create bool with value `true` & fallback `false`:**
```typescript
// Create bool with:
// 	fallbackDefault 	-	false
//	value				-	true
const bool = boolMake(false, true);

// Prints 'true'
// Second arg of boolMake is value.
console.log(bool());
```

&nbsp;

**Create bool with value `false` & fallback `true`:**
```typescript
// Create bool with:
//	fallbackDefault		-	true
//	value				-	false
const bool = boolMake(true, false);

// Prints 'false'.
console.log(bool());
```

&nbsp;

## Reset `Bool`
Reset any `Bool` object back to it's `fallbackDefault` value provided in `boolMake(...)`.

```typescript
const bool = boolMake(true);

// Set value to false
bool(false);

// Prints 'false'
console.log(bool());

// Reset object and remove current value.
// Object returns fallbackDefault 'true' until value is set.
bool.reset();

// Prints 'true', but bool has no current value.
console.log(bool());
```
&nbsp;

# `Int`
Positive & negative Integers stored as a JavaScript **`number`**. No type coercion used.

&nbsp;
## Values
### **Accepts**
- Integers in range: **`Number.MIN_SAFE_INT`** to **`Number.MAX_SAFE_INT`** (inclusive).

### **Rejects**
- Non-integers values.
- Values with decimal places (`4.44`, `0.11`, etc).

&nbsp;
## Make `Int`

### With **`number`**
```typescript
import type {Int} from '@toreda/strong-types';
import intMake from '@toreda/strong-types';

const value = intMake(0, 444111);
```

&nbsp;

## Reset `Int`

```typescript
const int = intMake(0);

// Set value to 101.
int(101);

// Prints 101
console.log(int());

// Reset object and remove current value.
// Returns fallbackDefault (0) until value is set.
int.reset();

// Prints 0. Int has no value.
console.log(int());
```

```typescript
const int = intMake(10);
// Set value to 100.
int(100);

// Prints 100.
console.log(log());
int.reset();

// Prints 10. Value null & fallback returned instead.
console.log(int());

// Prints null - value is null. getNull() does not use fallback.
console.log(int.getNull());
```

# `UInt`
Unsigned Integers stored as a JavaScript **`number`**.


&nbsp;
## Values
### Accepts
* Rejects `NaN`
* Rejects negative integers (e.g. `-22`).

- Positive Integers from `0` to `Number.MAX_SAFE_INT` (inclusive).

### Rejects
* `NaN`
* Non-finite values `Number.POSITIVE_INFINITY` and `Number.NEGATIVE_INFINITY`.
- Negative Integers.
  - ex: `-10`, `-1`
- Positive & negative decimals.
    	- ex: `5.1`, `100.9`, `-1.1`, `-99.99`, `0.11`, `-0.099`

&nbsp;
## Make `UInt`

### From **`number`**:
```typescript
import type {UInt} from '@toreda/strong-types';
import uIntMake from '@toreda/strong-types';

const value = uIntMake(0, 444111);
```
&nbsp;

# `Dbl`
Decimal values supporting arbitrary precision.

&nbsp;

## Values
### Accepts
- `strings` containing arbitrarily large positive or negative decimal & integer values. Numeric values for **`Dbl`** in `string` form may exceed `Number.MAX_VALUE` and `Number.MAX_SAFE_INT`.
  - ex: `'1'`, `'-100'`, `'1.1111111'`, `'0.00009'`, `'1.000009'`, `'-99.0009'`
- `numbers` from `Number.MIN_VALUE` to `Number.MAX_VALUE` (inclusive).
  - Note: Represent numbers exceeding `Number.MAX_VALUE` or below `Number.MIN_VALUE` as `string` or `Big`.
### Rejects
- Non-finite values `Number.POSITIVE_INFINITY`, `Number.NEGATIVE_INFINITY`.

&nbsp;

## Make `Dbl`

### From **`number`**:
```typescript
import type {Dbl} from '@toreda/strong-types';
import dblMake from '@toreda/strong-types';

const value = dblMake(0, 1111187);
```

### From **`string`**:
```typescript
import type {Dbl} from '@toreda/strong-types';
import dblMake from '@toreda/strong-types';

const value = dblMake(0, '1081987419714971411.441');
```

### From `Big`:
```typescript
import Big from 'big.js';
import type {Dbl} from '@toreda/strong-types';
import dblMake from '@toreda/strong-types';

const value = dblMake(0, Big(8714817418741));
```

&nbsp;
# Examples

Each built-in type exports a type and make function. The below examples use Int but work the same using: `StrongArray`, `Bool`, `Dbl`, `Float`, `Int`, `Text`, and `UInt`.

## Instantiate with initial value
```typescript
import {Int, intMake} from '@toreda/strong-types';

const initial = 11;
const fallback = 55;
const int = intMake(initial, fallback);

// Returns 11 - initial value was 11.
const value = int();
```

## Instantiate without initial value



```typescript
import {Int, intMake} from '@toreda/strong-types';

const fallback = 919;
const int = intMake(null, fallback);

// value is 919 - initial value was null, so fallback was
// returned instead to maintain the function's return type guarantee.
const value = int();
```

## Get with Fallback
* `get(fallback: T): T`
Call `container.get(fallback)` when a per-call fallback is preferred instead of the container's default fallback.
```typescript
import {Int, intMake} from '@toreda/strong-types';
const int = intMake(null, 555);

const fallback = 331;
// Prints 331 (fallback) instead of 555 (container default fallback).
console.log(value.get(fallback));
```

## GetNull
* `getNull(): T | null`
Call `container.getNull()` to the current value, even if null. Value will never be undefined and will always return either null, or a value of container's generic type T.

NOTE: `getNull` **DOES NOT** take a fallback argument and will not return the container's default fallback. It always returns value (`null` or `StrongType<T>`).

```typescript
import {Int, intMake} from '@toreda/strong-types';

const fallback = 919;
const int = intMake(null, fallback);

// Prints null. Default fallback is not used for `getNull` calls.
console.log(int.getNull());
```

## Set Value
```typescript
import type {Int} from '@toreda/strong-types';
import {intMake} from '@toreda/strong-types';

const initial = 331;
const fallback = 400;
const int = intMake(initial, fallback);

// value is 331 - the int's initial value.
const value = int();

// Set int to a new value.
int(555);

// value is 555 - the value we updated int to.
const value = int();

```

## Set `null`
```typescript
import {Int, intMake} from '@toreda/strong-types';

const initial = 414;
const fallback = 500;
const int = intMake(initial, fallback);

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
import {Int, intMake} from '@toreda/strong-types';

const initial = 515;
const fallback = 600;
const int = intMake(initial, fallback);

// value is 515 (the initial value).
const value = int();

// Reset container value
int.reset();

// Prints 600 (fallback). value was reset to null,
// fallback was returned to maintain return type guarantee.
console.log(int());

```

&nbsp;

### Validation
`StrongType` containers validate value inputs before setting. Bad values are ignored and will not cause a throw. Each built-in container type provides specific guarantees for which values are allowed.

```typescript
import {Int, intMake} from '@toreda/strong-types';
const int = intMake(50, 100);

// success is false.
// container.value is still it's initial value 50 because 1.5 is not an int.
// Int does not round or truncate non-integers. They are simply ignored.
const success = int(1.5);
```

&nbsp;

# `StrongMap`

Creating and using a StrongMap class.
```typescript
import {StrongMap, Int, Text, intMake, textMake} from '@toreda/strong-types';


export class SomeConfig extends StrongMap {
	public readonly counter: Int;
	public readonly name: Text;

	constructor(json: any) {
		super();
		this.counter = intMake(0, 0);
		this.name = textMake('', 'TreeBeard');
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
import {StrongMap, StringInt, Text, intMake, textMake} from '@toreda/strong-types';

export class SomeConfig extends StrongMap {
	public readonly counter: Int;
	public readonly name: Text;

	constructor(json?: any) {
		super();
		this.counter = intMake(0, 0);
		this.name = textMake(null, 'TreeBeard');
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
import {StrongMap, StringInt, Text, intMake, textMake} from '@toreda/strong-types';

export class SomeConfig extends StrongMap {
	public readonly counter: Int;
	public readonly name: Text;

	constructor(json?: any) {
		super();
		this.counter = intMake(0, 0);
		this.name = textMake(null, 'TreeBeard');
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

&nbsp;

&nbsp;

# Validators

&nbsp;

# Custom Types
Each built-in type like `Int` and `UInt` are helper functions wrapping `Strong<T>`. They also apply validators which guarantee the `Strong<T>` value behaves as expected. While built-ins are provided for convenience, you can create custom types with your own validators.

## Instantiate `Strong<T>`

```typescript
import {Strong, strongMake} from '@toreda/strong-types';

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

const myObj = strongMake<MyOwnType>(initial, fallback);

```


&nbsp;

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

&nbsp;

# Legal

## License
[MIT](LICENSE) &copy; Toreda, Inc.


## Copyright
Copyright &copy; 2019 - 2022 Toreda, Inc. All Rights Reserved.


## Website
Toreda's company website can be found at [toreda.com](https://www.toreda.com)
