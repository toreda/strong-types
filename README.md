

# `@toreda/kvp` Toreda Key-Value Pair (KVP)

![CI](https://github.com/armorjvs/kvp/workflows/CI/badge.svg?branch=master) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=toreda_kvp&metric=coverage)](https://sonarcloud.io/dashboard?id=toreda_kvp) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=toreda_kvp&metric=alert_status)](https://sonarcloud.io/dashboard?id=toreda_kvp)

Typescript-first library manage type-safe key value pairs. Eliminate excessive validation code with type-safe setters & getters.

## Contents

-   [Installation](#Installation)
-   [Usage](#usage)
-   [Build](#build)
-   [Testing](#testing)
-   [License](#license)


## Install

**_With yarn (preferred):_**
```bash
yarn add @toreda/kvp
```

With NPM:
```bash
npm install @toreda/kvp
```

## Usage


###  Built-in Types

#### KVPInt - integers
Accepts integer values only.
##### Creating Ints
```typescript
import KVPInt, {createKVPInt} from '@toreda/kvp';
const initial = 11;
const fallback = 55;
const int = createKVPInt(initial, fallback);

// Returns 11 - initial value was 11.
const value = int();
```

##### Fallback Default
```typescript
import KVPInt, {createKVPInt} from '@toreda/kvp';
const initial = null;
const fallback = 101;
const uint = createKVPInt(initial, fallback);

// Returns 101 - current value is null (no value set).
const value = uint();
```

##### Individual Fallbacks
```typescript
import KVPInt, {createKVPInt} from '@toreda/kvp';
const int = createKVPInt(null, 201);

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
KVPInt will not update t's value called with a positive or negative integer.
```typescript

import KVPInt, {createKVPInt} from '@toreda/kvp';
const uint = createKVPInt(50, 100);

// Attempting to set value to a negative integer.
// Success will be false.
const success = int(1.5);

// value is still 50. 1.5 is not an integer.
const value = uint();
```


#### KVPUInt - unsigned integers
Accepts positive integer values only. Everything else will be rejected and will not update the value.

##### Creating UInts
```typescript
import KVPUInt, {createKVPUInt} from '@toreda/kvp';
// UInt starting value.
const initial = 44;
const fallbackDefault = 1;
const uint = createKVPUInt(initialValue, fallbackDefault);

// Get the current value 44.
const uintValue = uint();

// Set value to 14.
uint(14);
```

##### Using the  Fallback Default
```typescript
import KVPUInt, {createKVPUInt} from '@toreda/kvp';
const initialValue = null;
const fallbackDefault = 27;
const uint = createKVPUInt(initialValue, fallbackDefault);

// Returns 27. Getting the current value with uint() guarantees a type-safe return value.
// When the current value is null (not set), the default fallback is returned instead.
const value = uint();
```


##### Individual Fallbacks
```typescript
import KVPUInt, {createKVPUInt} from '@toreda/kvp';
const uint = createKVPUInt(null, 30);

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
KVPUInt performs automatic input validation and will not update it's value unless the provided input is an unsigned integer.
```typescript

import KVPUInt, {createKVPUInt} from '@toreda/kvp';
const uint = createKVPUInt(20, 40);

// Attempting to set value to a negative integer.
// Success will be false.
const success = uint(-10);

// value is still initial value 20 because -10 above is not an
// unsigned integer. No errors on thrown on invalid input.
const value = uint();
```


#### KVPDouble - doubles


### Create a key-value pair
```typescript
import KVP, {createKVP} from '@toreda/kvp';
const initial = 'hello';
const fallbackDefault = 'goodbye';
const myValue = createKVP<string>(initial, fallbackDefault);
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
// Set kvp to string 'trendy'
myValue('trendy');
```

### Set value to null
```typescript
// Set kvp to be null.
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
