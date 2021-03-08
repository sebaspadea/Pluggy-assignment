const writeQuotes = require('../data/writeQuotes')
const writeAverages = require('../data/writeAverages')


function cacheResponse(res, seconds){
  res.set('Cache-Control', `public, max-age=${seconds}`);
  writeQuotes
  writeAverages
};

module.exports = cacheResponse