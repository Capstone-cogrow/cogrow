const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

const getHtml = async () => {
  try {
    return await axios.get("https://www.2bob.co.kr/recipe.php?id=view&idx=52");
  } catch (error) {
    console.error(error);
  }
};

getHtml()
  .then(html => {
    let ulList = [];
    const $ = cheerio.load(html.data);

    // 요리정보
    const Title = $("div.rec_view_top.clr");
    const titleData = Title
      .map((index, div) => ({
        Image: $(div).find("div.fl.rec_view_img > img").attr('src'),
        Title: $(div).find("div.fr.rec_info > div.rec_exp > h2").text(),
        Sub_Title: $(div).find("div.fr.rec_info > div.rec_exp > p").text(),
        Exp: $(div).find("div.fr.rec_info > div.rec_exp > div").text(),
      }))
      .toArray();

    // 재료
    const Ingredients = $("div.rec_view_top.clr > div.fr.rec_info > div.rec_mate > div");
    const ingredientData = Ingredients
      .map((index, div) => ({
        Ingredients: $(div).find("p").text(),
      }))
      .toArray();

    const RecipeImg = $("div.img_box.clr");
    const RecipeImgData = RecipeImg
      .map((index, div) => ({
        RecipeImg: $(div).find("img").attr('src'),
      }))
    .toArray();

    // 레시피
    const Recipe = $("div.text_wrap.clr > div.text_box");
    const recipeData = Recipe
      .map((index, div) => ({
        Recipe: $(div).find("div").text(),
      }))
      .toArray();


    console.log(titleData, ingredientData, RecipeImgData, recipeData);
  })