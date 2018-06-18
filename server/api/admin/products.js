const epilogueAuth = require('./epilogue-auth');

module.exports = (epilogue, models) => {
  epilogue.resource({
    model: models.Product,
    endpoints: ['/products', '/products/:id']
  })
    .all
    .auth(epilogueAuth);
}
