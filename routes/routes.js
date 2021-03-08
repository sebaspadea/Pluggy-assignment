const quotesJson = require('../data/quotes.json');
const cacheResponse = require('../utils/cacheResponse');
const express = require('express');

function appRouter(app) {
  const router = express.Router();
  app.use('/usd', router);

  router.get('/', (req, res) => {
    res.send('welcome to the development api-server');
  });

  router.get('/quotes', async function(req, res, next) {
    cacheResponse(res, 60);
    try {
      res.status(200).json({
        data: quotesJson,
        message: 'Quotes listed'
      });

    } catch(err) {
      next(err);
    }
  });
};


module.exports = appRouter;
