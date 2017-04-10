# stream-to-blue

### Usage
Log streams to colored stderr.
```
var streamToBlue = require('stream-to-blue');
process.stdin.pipe(streamToBlue());
```

### Example
```
seq 1 10 | node test.js
```
