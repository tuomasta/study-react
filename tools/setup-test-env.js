process.env.NODE_ENV = 'test';

require('babel-register')();

// disable webpack features that are not needed when running tests
require.extensions['.css'] = function() {
  return null;
}
require.extensions['.png'] = function() {
  return null;
}
require.extensions['.jpg'] = function() {
  return null;
}

// use jsdom to simulate browser
var jsdom = require('jsdom').jsdom;
var exposedProperties = ['window', 'navigator', 'document'];

// configure dom and set global variables to simulate browser
global.document = jsdom('');
global.window = document.defaultView;

Object.keys(document.defaultView).forEach(prop => {
  if (typeof global[prop] === 'undefined') {
    exposedProperties.push(prop);
    global[prop] = document.defaultView[prop];
  }
})

global.navigator = {
  userAgent: 'node.js'
};