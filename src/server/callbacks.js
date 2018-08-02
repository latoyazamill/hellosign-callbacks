const config = require("../../config.js");

export function callbacks (req, res, json) {
  var data = req.body.json;
  data = JSON.parse(data);
  data = data.event;
  console.log("What is the data?????----->", data);
  var apiKey = config.APIKEY;
  var calculate_hash = crypto.createHmac('sha256', apiKey).update(data.event_time + data.event_type).digest('hex').toString();
  var event_hash = data.event_hash;
  if (calculate_hash == event_hash) {
    res.status(200).send('Hello API Event Received');
  } else {
    res.status(404).end();
  }
};
