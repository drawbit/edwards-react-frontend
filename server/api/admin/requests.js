const epilogueAuth = require('./epilogue-auth');

module.exports = (epilogue, models) => {
  epilogue.resource({
    model: models.Request,
    endpoints: ['/requests', '/requests/:id']
  })
    .all
    .auth(epilogueAuth);
}
