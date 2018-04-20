'use strict';

module.exports = function(Book) {
  Book.greet = function(msg, cb) {
    cb(null, 'Greetings... ' + msg);
  }

  Book.remoteMethod('greet', {
        accepts: {arg: 'msg', description:'message test',  type: 'string'},
        returns: {arg: 'greeting', type: 'string'}
  });
};
