const request = require("request");

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`,
  function(error, response, body) {
    if (error) {
      console.log(error);
      return;
    }
    const data = JSON.parse(body);
    if (data[0]) {
      console.log(data[0].description);
    } else {
      console.log("Does not exist");
    }
  }
);
