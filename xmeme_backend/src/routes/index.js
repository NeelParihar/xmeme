const express = require('express');
const memeRoute = require('./meme.route');
const docsRoute = require('./docs.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/memes',
    route: memeRoute,
  },
  {
    path: '/swagger-ui',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
