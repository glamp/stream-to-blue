var colors = require('colors');
var Stream = require('stream').Stream;

module.exports = (options) => {
  options = options || {};
  var color = options.color || 'cyan';
  if (! color in colors.styles) {
    color = 'cyan';
  }

  var colorStream = new Stream;
  colorStream.writable = true;
  colorStream.bytes = 0;

  colorStream.write = function(buf) {
    colorStream.bytes += buf.length;
    process.stderr.write(buf.toString()[color]);
  }

  colorStream.end = function(buf) {
    if(arguments.length) {
      colorStream.write(buf);
    }
    colorStream.writable = false;
  }
  return colorStream;
}




