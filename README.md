

# `@toreda/type-box`

![CI](https://github.com/toreda/type-box/workflows/CI/badge.svg?branch=master) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=toreda_type-box&metric=coverage)](https://sonarcloud.io/dashboard?id=toreda_type-box) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=toreda_type-box&metric=alert_status)](https://sonarcloud.io/dashboard?id=toreda_type-box)

Native TypeScript containers for generic values. Reliably store and retrieve values without writing validation or type checking code. Use predefined types & validators, or make your own.


What does it do?
```typescript
import { TBInt, makeInt } from '@toreda/type-box';
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

## Contents

-   [Installation](#Installation)
-   [Usage](#usage)
-   [Build](#build)
-   [Testing](#testing)
-   [License](#license)


## Install

**_With yarn (preferred):_**
```bash
yarn add @toreda/type-box
```

With NPM:
```bash
npm install @toreda/type-box
```

## Usage


###  Built-in Types

#### TBInt - Type Box Integers
Accepts integer values only.
##### Creating Ints
```typescript
import {TBInt, makeInt} from '@toreda/type-box';
const initial = 11;
const fallback = 55;
const int = makeInt(initial, fallback);

// Returns 11 - initial value was 11.
const value = TBInt();
```

##### Fallback Default
```typescript
import {TBInt, makeInt} from '@toreda/type-box';
const initial = null;
const fallback = 101;
const uint = makeInt(initial, fallback);

// Returns 101 - current value is null (no value set).
const value = uint();
```

##### Individual Fallbacks
```typescript
import {TBInt, makeInt} from '@toreda/type-box';
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

##### Validation
TBInt will not update t's value called with a positive or negative integer.
```typescript
import {TBInt, makeInt} from '@toreda/type-box';
const uint = makeInt(50, 100);

// Attempting to set value to a negative integer.
// Success will be false.
const success = uint(1.5);

// value is still 50. 1.5 is not an integer.
const value = uint();
```


#### TBUInt - unsigned integers
Accepts positive integer values only. Everything else will be rejected and will not update the value.

##### Make UInts
```typescript
import {TBUInt, makeUInt} from '@toreda/type-box';
// UInt starting value.
const initial = 44;
const fallbackDefault = 1;
const uint = makeUInt(initialValue, fallbackDefault);

// Get the current value 44.
const uintValue = uint();

// Set value to 14.
uint(14);
```

##### Using the  Fallback Default
```typescript
import {TBUInt, makeUInt} from '@toreda/type-box';
const initialValue = null;
const fallbackDefault = 27;
const uint = makeUInt(initialValue, fallbackDefault);

// Returns 27. Getting the current value with uint() guarantees a type-safe return value.
// When the current value is null (not set), the default fallback is returned instead.
const value = uint();
```


##### Individual Fallbacks
```typescript
import {TBUInt, makeUInt} from '@toreda/type-box';
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
TBUInt performs automatic input validation and will not update it's value unless the provided input is an unsigned integer.
```typescript
import {TBUInt, makeUInt} from '@toreda/type-box';
const uint = makeUInt(20, 40);

// Attempting to set value to a negative integer.
// Success will be false.
const success = uint(-10);

// value is still initial value 20 because -10 above is not an
// unsigned integer. No errors on thrown on invalid input.
const value = uint();
```


#### TBDouble - Type Box Doubles


### Create a key-value pair
```typescript
import {TypeBox, make} from '@toreda/type-box';
const initial = 'hello';
const fallbackDefault = 'goodbye';
const myValue = make<string>(initial, fallbackDefault);
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

### Set value
```typescript
// Set value to string 'trendy'
myValue('trendy');
```

### Set value to null
```typescript
// Set value to be null.
myValue(null);
```

### Reset value
Reset will set value to null without using set functionality.
```typescript
// set kvp to hello
myValue('hello');

// Outputs hello
myValue();

// value will become null.
myValue.reset();
```

## Build
First run `yarn` to install repo packages. Then, run the build command.
```bash
yarn
yarn build
```

## License

[MIT](LICENSE) &copy; Toreda, Inc.
