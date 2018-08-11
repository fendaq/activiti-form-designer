const jsonServer = require('json-server');
const getData = require('./getData');
const postData = require('./postData');
const routes = require('./routes.json');

const server = jsonServer.create();
const router = jsonServer.router(getData);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    res.status(200).jsonp(postData(req.url));
  } else {
    next();
  }
});

server.use(jsonServer.rewriter(routes));
server.use(router);

const PORT = 4000;
server.listen(PORT, () => {
  // console.log(`JSON Server is running, http://localhost:${PORT}.`);
});
