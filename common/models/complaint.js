'use strict';
var loopback = require('loopback');

module.exports = function(Complaint) {

  // set userId
  Complaint.observe('before save', function filterProperties(ctx, next) {
    ctx.instance.userId = ctx.options.accessToken.userId;
    next();
  });

  Complaint.me = function(cb) {
    var ctx = loopback.getCurrentContext();

    Complaint.find({
      where: {
        userId: ctx.active.http.req.accessToken.userId
      }
    }, cb);
  }

  Complaint.remoteMethod('me', {
    returns: {
      root: true
    }
  });
};
