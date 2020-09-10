
# ArmorJS - Key-Value Pair (KVP)

![CI](https://github.com/armorjs/kvp/workflows/CI/badge.svg?branch=master) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=armorjs_kvp&metric=coverage)](https://sonarcloud.io/dashboard?id=armorjs_kvp) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=armorjs_kvp&metric=alert_status)](https://sonarcloud.io/dashboard?id=armorjs_kvp)

`@armorjs/kvp` offers a convenient and typesafe managed key-value pairs. Eliminate excessive type and safety checks with type-safe accessors for key-value pairs and built in parsing.

## Contents

-   [About ArmorJS](#about-armorjs)
-   [Installation](#Installation)
-   [Usage](#usage)
-   [Build](#build)
-   [Testing](#testing)
-   [License](#license)

## About ArmorJS

Small footprint, reliable, thoroughly tested packages for Typescript and Javascript.
https://github.com/armorjs/_project-home

## Install

**_With yarn (preferred):_**
```bash
yarn add @armorjs/kvp
```

With NPM:
```bash
npm install @armorjs/kvp
```
## Examples

### Create a key-value pair
```typescript
import ArmorKVP, {createKVP} from '@armorjs/kvp';
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

[MIT](LICENSE) &copy; Michael Brich
