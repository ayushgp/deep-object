# deep-object
A CRUD API to manipulate objects in depth. Get, Set, Update and Delete functions available.

## Installation
With npm
```bash
npm install deep-object
```

## Example

```js
var deepObj = require('deep-object');
var obj = {
  level1:{
    level2:{
      level3:{
        name: "Foo"
      }
    },
    anotherLevel2: "bar"
  }
};

deepObj.get(obj, ["level1", "level2"]); //returns {level3: {name: "Foo"}}

deepObj.set(obj, ["level1", "level2"], "FooBar"); //Sets level2 to "FooBar"

deepObj.remove(obj, ["level1", "level2"]); //Object now becomes, {level1: {}}
```

## API

### deepObj.get(object, path);

Gets the value at the given `path`
- `object` is a JS object
- `path` is a string array containing keys from outermost to innermost.

### deepObj.set(object, path, value);

Sets/updates given `value` at the `path`.
- `object` is a JS object
- `path` is a string array containing keys from outermost to innermost.
- `value` is any valid JS variable.

### deepObj.remove(object, path);

Removes the given path element.
- `object` is a JS object
- `path` is a string array containing keys from outermost to innermost.

## Note
I needed this for a project. Didn't look through NPM for this. Here is my implementation.
