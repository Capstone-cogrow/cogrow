const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

const crop = "사과";

const getHtml = async () => {
  try {
    return await axios.get("https://www.2bob.co.kr/search_list.php?a=result_recipe&fKeyValue=" + crop);
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then(html => {
    let ulList = [];
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
    console.log(recipeListData);
  })
  