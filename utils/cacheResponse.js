const writeQuotes = require('../data/writeQuotes')
const writeAverages = require('../data/writeAverages')
const writeSlippage = require('../data/writeSlippage')


function cacheResponse(res, seconds){
  res.set('Cache-Control', `public, max-age=${seconds}`);
  writeQuotes
  writeAverages
  writeSlippage
};

module.exports = cacheResponse