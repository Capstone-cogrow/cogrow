const express = require("express");
const path = require('path');
const app = express();
const port = 3003;

const { getRecipeList } = require("./recipe_list.js");
const fs = require("fs");
const bodyParser = require("body-parser");
const cron = require("node-cron");

const ProudctJSON = fs.readFileSync("./recipe.json");
//const newsData = JSON.parse(newsJSON);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

async function getProductAsync() {
  const Product_data = await getRecipeList();
  console.log("Product = ", Product_data);
  console.log(ProudctJSON.text);
}


cron.schedule("*/1 * * * *", async () => {
  console.log("running a task every two minutes");
  await getProductAsync();
});


app.get("/api/recipe",async(req,res)=> {
  res.send(ProudctJSON);
  console.log("OK");
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})