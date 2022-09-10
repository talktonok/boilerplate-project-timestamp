// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/:date", function (req, res) {
  let {date} = req.params;
  if(date.includes('-')){

const date1 = new Date(date);
const timestampInMs = date1.getTime();
const timestampInSeconds = Math.floor(date1.getTime() / 1000);

  var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
var date2 = new Date(timestampInSeconds * 1000).toUTCString(options);

  
  res.json({unix: timestampInSeconds, utc: date2});
  } else 
  {
    const date1 = new Date(date * 1000);
    const timestampInSeconds = Math.floor(date1.getTime() / 1000);
    var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
var date2 = new Date(timestampInSeconds).toUTCString( options);

  
  res.json({unix: timestampInSeconds, utc: date2});
   // res.json({unix: "timestampInSeconds", utc: "date2"});
  }
});

app.get("/api/:time", function (req, res) {
  res.json({unix: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
