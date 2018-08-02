const config = require("../../config.js");
const crypto = require('crypto');

const callbacks = function(req, res, json) {
  var data = req.body.json;
  data = JSON.parse(data);
  data = data.event;
  var apiKey = config.APIKEY;
  var calculate_hash = crypto.createHmac('sha256', apiKey).update(data.event_time + data.event_type).digest('hex').toString();
  var event_hash = data.event_hash;
  if (calculate_hash == event_hash) {
    res.status(200).send('Hello API Event Received');
  } else {
    res.status(404).end();
  }
};

module.exports = callbacks;
