'use strict';

module.exports = function(Picture) {

  // set userId
  Picture.observe('before save', function filterProperties(ctx, next) {
    ctx.instance.userId = ctx.options.accessToken.userId;
    next();
  });

};
