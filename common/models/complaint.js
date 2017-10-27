'use strict';

module.exports = function(Complaint) {

  // set userId
  Complaint.observe('before save', function filterProperties(ctx, next) {
    ctx.instance.userId = ctx.options.accessToken.userId;
    next();
  });

};
