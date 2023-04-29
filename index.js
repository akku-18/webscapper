const axios = require("axios");
const express = require("express");
const cheerio = require("cheerio");

const app = express();

const url = "https://www.boat-lifestyle.com/";

axios(url).then((res) => {
  const html = res.data;
  const $ = cheerio.load(html);
  const articles = [];

  $(".collection_title", html).each(function () {
    const title = $(this).text();

    articles.push({
      title,
    });
  });

  $(".img_container", html).each(function () {
    const url = $(this).find("img").attr("src");
    const newUrl = "https:" + url;

    articles.push({
      newUrl,
    });
  });

  console.log(articles);

  
});

app.listen(8000, () => console.log(`Server Running on Port 8000`));
