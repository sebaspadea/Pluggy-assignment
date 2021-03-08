const writeQuotes = require('../data/writeQuotes')

function cacheResponse(res, seconds){
  res.set('Cache-Control', `public, max-age=${seconds}`);
  writeQuotes()
};

module.exports = cacheResponse