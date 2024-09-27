const debug1 = require('./debug')('first');
const debug2 = require('./debug')('second'); // !!! WARNING !!!

debug1('debug1 starting');
debug2('debug2 starting');

setTimeout( () => {
  debug1('debug1 over time');
  debug2('debug2 over time');
}, 200);

// !!! WARNING !!!

/*
first debug1 starting +0ms
second debug2 starting +8ms
first debug1 over time +217ms
second debug2 over time +2ms
*/


