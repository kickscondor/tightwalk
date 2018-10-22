# tightwalk

> A simple directory walker for Node that does not stop on errors. (I designed this to work well with
> [kicktock](https://github.com/kickscondor/kicktock).)

## Installation

```bash
npm install tightwalk
```

## Example

```js
var tightwalk = require('tightwalk');

tightwalk(__dirname, function(err, path, stats) {
  if (err)
    console.log(err);
  console.log(path, stats);
}, function() {
  console.log("DONE!");
});
```

## API

#### `tightwalk(dir, walkCb, finishCb)`

##### Parameters

* `dir`: The directory to walk
* `walkCb`: `function(err, file, stats)` The function to be called with each file.
  * `err`: Any error occuring with accessing this file.
  * `file`:  Relative file path.
  * `stats`: [fs.Stats](https://nodejs.org/docs/latest/api/fs.html#fs_class_fs_stats) object
* `finishCb`: `function()` Called when all files have been walked.
