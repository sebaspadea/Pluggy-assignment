const express = require('express');
const appRouter = require('./routes/routes');
const app = express();
const notFoundHandler = require('./utils/middleware/notFoundHandler');




// body parser
app.use(express.json());

// routes
appRouter(app);

// Catch 404
app.use(notFoundHandler);



const server = app.listen(3001, () => {
  console.log('listening on port %s...', server.address().port);
});