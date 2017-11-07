'use strict';

module.exports = function(Complaint) {

  // set userId
  Complaint.observe('before save', function filterProperties(ctx, next) {
    ctx.instance.userId = ctx.options.accessToken.userId;
    next();
  });

  Complaint.me = function(options, cb) {
    Complaint.find({
      where: {
        userId: options.accessToken.userId
      }
    }, cb);
  }

  Complaint.remoteMethod('me', {
    http: {
      verb: 'get'
    },
    returns: {
      root: true
    }
  });
};
