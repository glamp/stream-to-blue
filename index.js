var colors = require('colors');
var Stream = require('stream').Stream;

module.exports = () => {
  var colorStream = new Stream;
  colorStream.writable = true;
  colorStream.bytes = 0;

  colorStream.write = function(buf) {
    colorStream.bytes += buf.length;
    process.stderr.write(buf.toString().cyan);
  }

  colorStream.end = function(buf) {
    if(arguments.length) {
      colorStream.write(buf);
    }
    colorStream.writable = false;
  }
  return colorStream;
}




