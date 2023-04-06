const express = require('express')
const app = express()
const router = require('./router.js')
const port = 5000;

app.use('/applyjob', router)

  app.listen(port, function () {
    console.log(`app listening on port ${port}!`);
  });