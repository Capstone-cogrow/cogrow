const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const crop = "옥수수";
const dataPath = "./recipe.json";

const getHtml = async () => {
  try {
    return await axios.get("https://www.2bob.co.kr/search_list.php?a=result_recipe&fKeyValue=" + crop);
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then(html => {
    const $ = cheerio.load(html.data);
    const RecipeList = $("div.contain > div.search_con > div > ul > li");
    const recipeListData = RecipeList
      .map((index, div) => ({
        link: $(div).find("a").attr('href'),
        img_url: $(div).find("a > div.img_wrap > img").attr('src'),
        sub_title: $(div).find("a > div.text_box > p.s_title").text(),
        title: $(div).find("a > div.text_box > p.b_title").text(),
      }))
      .toArray();
    fs.writeFileSync(dataPath, JSON.stringify(recipeListData));
    console.log(recipeListData);
  })

  module.exports = { getHtml };