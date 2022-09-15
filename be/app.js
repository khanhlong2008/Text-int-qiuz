const elasticsearch = require("elasticsearch");

const client = new elasticsearch.Client({
  host: "locahost:9200",
  pingTimeout: 3000,
  log: "trace",
});

client.ping({}, async function (error) {
  if (error) {
    console.log("Not Found" + "" + error);
  } else {
    console.log("connect");
  }
});
