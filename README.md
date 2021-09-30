# `@toreda/strong-types`

![CI](https://github.com/toreda/strong-types/workflows/CI/badge.svg?branch=master) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=toreda_strong-types&metric=coverage)](https://sonarcloud.io/dashboard?id=toreda_strong-types) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=toreda_strong-types&metric=alert_status)](https://sonarcloud.io/dashboard?id=toreda_strong-types)

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

## `StrongArray<T>`
Strict `Array` type.

&nbsp;

## `Bool`
Strict **`boolean`** values.
* Accepts only **`true`** or **`false`**.
* Rejects all non-boolean values.
* No type coercion.

&nbsp;

## `Int`
Positive & negative Integers stored as a JavaScript **`number`** with no type coercion.

### **Accepts**
- **`Number.MIN_SAFE_INT`** to **`Number.MAX_SAFE_INT`** (inclusive).

### **Rejects**
- Non-integer values.

## Create an `Int`

### With **`number`**
```typescript
import type {Int} from '@toreda/strong-types';
import intMake from '@toreda/strong-types';

const value = intMake(0, 444111);
```

&nbsp;

# `UInt`
Unsigned Integers stored as a JavaScript **`number`**.


&nbsp;
## Values
### Accepts
- Positive Integers from `0` to `Number.MAX_SAFE_INT` (inclusive).


### Rejects
- Negative Integers.
  - ex: `-10`, `-1`
- Positive & negative decimals.
    	- ex: `5.1`, `100.9`, `-1.1`, `-99.99`, `0.11`, `-0.099`

&nbsp;
## Create a `UInt`

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

## Create a `Dbl`

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


# Supported Types
* [`StrongArray`](#StrongArray), arrays
* [`Bool`](#Bool), booleans (strict)
* [`Dbl`](#Dbl), doubles
* [`Int`](#Int), integers
* [`UInt`](#StrongUint), unsigned integers
* [`Text`](#Text) - strings

# Using `StrongMap`

Creating and using a StrongMap class.
```typescript
import {StrongMap, Int, Text, intMake, makeString} from '@toreda/strong-types';


export class SomeConfig extends StrongMap {
	public readonly counter: Int;
	public readonly name: Text;

	constructor(json: any) {
		super();
		this.counter = intMake(0, 0);
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
import {StrongMap, StringInt, Text, intMake, makeString} from '@toreda/strong-types';

export class SomeConfig extends StrongMap {
	public readonly counter: Int;
	public readonly name: Text;

	constructor(json?: any) {
		super();
		this.counter = intMake(0, 0);
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
import {StrongMap, StringInt, Text, intMake, makeString} from '@toreda/strong-types';

export class SomeConfig extends StrongMap {
	public readonly counter: Int;
	public readonly name: Text;

	constructor(json?: any) {
		super();
		this.counter = intMake(0, 0);
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
import {Bool, boolMake} from '@toreda/strong-types';
```

### Accepted Values
* Strict booleans: `true` or `false` only.
* No type coercion (e.g. `1` or `0` will be rejected).

## `Dbl`

### Import
```typescript
import {Dbl, makeDbl} from '@toreda/strong-types';
```

### Accepted Values
* `number` values between and including Number.MIN_VALUE and Number.MAX_VALUE.
* Rejects `NaN` values.

## `Int`

### Import ###
```typescript
import {Int, intMake} from '@toreda/strong-types';
```
### Accepted Values ###
* `number` values between and including Number.MIN_VALUE and Number.MAX_VALUE.
* `NaN` values are rejected.


## `Text`

### Import
```typescript
import {Text, makeString} from '@toreda/strong-types';
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
