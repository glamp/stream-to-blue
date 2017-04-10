var streamToBlue = require('./index');

process.stdin.pipe(streamToBlue());
process.stdin.pipe(streamToBlue({ color: 'blue' }));
process.stdin.pipe(streamToBlue({ color: 'green' }));
