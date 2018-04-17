var load = require('bundle-loader!./a.js');
var load1 = require('bundle-loader!./b.js');

load(function(file) {
  document.open();
  document.write('<h1>' + file + '</h1>');
  document.close();
});
