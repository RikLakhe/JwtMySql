var express = require('express');
var router = express.Router();

const mockData = require('./../mock/mockData');
const commonUtils = require('./../utils/commonUtils');

commonUtils.randomSecretKey();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', (req, res, next) => {
  res.status(200).send(
    `serverTime = ${mockData.localeTime} 
      /n
      \n
      &&& Users = ${mockData.Users()} 
      /n
      \n
      &&& jwtTime=${mockData.jwtTime} 
      \n/n
   90650
      &&& key=${mockData.superSecret}`
  );
});

module.exports = router;
