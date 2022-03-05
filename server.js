const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path');
const User = require('./models/User');
// mod.cjs
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();

//connecting the db first
connectDB();

app.use(bodyParser.json());
app.use(cors());

//get route for getting all data from database
app.get('/', async (req, res) => {
  try {
      const profiles = await User.find();
      res.json(profiles);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
  }
});

//fetching through api
fetch('https://api.wazirx.com/api/v2/tickers')
    .then(res => res.json())
    .then(json => {

      //get top 10 results
      for (var i = 0; i < 10; i++) {
        var obj = json;
        var keysArray = Object.keys(obj);
        var key = keysArray[i];
        var value = obj[key];
        //checking that the database is empty or not
        var check = User.findOne({name: key}, function(err, records){

        });
        if(!check){
          //if not empty store the result in database
          let user = new User({
            name: key,
            last: value.last,
            buy: value.buy,
            sell: value.sell,
            volume: value.volume,
            base_unit: value.base_unit
          });
          user.save(function(err, records){
            console.log("Record added as ");
          });
        }
      }
    });

//production
//if (process.env.NODE_ENV === 'production') {
 // app.use(express.static('client/build'));

  //app.get('*', (req, res) => {
  //  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
 // });
//}

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log("Server started on port " +  PORT));
