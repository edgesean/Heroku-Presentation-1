const router = require('express').Router();

router.get('/', (req, res) => res.send(
  'Welcom to my presentation on how to deploy a heroku server'
));


module.exports = router;