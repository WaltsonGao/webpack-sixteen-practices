require.ensure(['./a', './b'], function(require) {
  var content = require('./a');
  var content1 = require('./b');
  document.open();
  document.write('<h1>' + content + content1 + '</h1>');
  document.close();
});
