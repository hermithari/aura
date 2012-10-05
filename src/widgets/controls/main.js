define(['sandbox', './views/app'], function(sandbox, AppView) {
  'use strict';

  return function(options) {
    new AppView({
      el: sandbox.dom.find(options.element)
    });

    sandbox.emit('bootstrap', 'controls');

    sandbox.on('bootstrap', 'controls', function(from) {
      console.log('Controls-bootstrap message from from: ' + from);
    });
    sandbox.on('*', 'calendar', function(from){
      console.log('A wildcard was caught from:', from);
    });

  };

});
