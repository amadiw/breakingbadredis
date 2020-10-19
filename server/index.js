const express = require("express");
const redis = require("redis");
const axios = require("axios");
const bodyParser = require("body-parser");
const volleyball = require("volleyball");

const port_redis = process.env.PORT || 6379;
const port = process.env.PORT || 5000;

//configure redis client on port 6379
const redisClient = redis.createClient(port_redis);

const app = express();

//logging middleware
app.use(volleyball.custom());

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Api route
app.get("/api/quotes", (req, res) => {
  try {
    redisClient.get("apiQuotes", async (err, quotes) => {
      if (quotes) {
        res.send(quotes);
      } else {
        const getQoutes = await axios.get(
          `https://www.breakingbadapi.com/api/quotes`
        );
        const { data: qoutes } = getQoutes;
        redisClient.setex("apiQuotes", 3600, JSON.stringify(qoutes));
        res.json(qoutes);
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//listen on port 5000;
app.listen(port, () => console.log(`Server running on Port ${port}\nRedis runnong on Port ${port_redis}`));
