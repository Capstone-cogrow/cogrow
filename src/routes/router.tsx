import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Disease from "../pages/Disease";
import Crops from "../pages/Crops";
import Recipe from "../pages/Recipe";
import Introduce from "../pages/Introduce";
import CropsManage from "../pages/CropsManage";
import CropsRegistration from "../pages/CropsRegistration";
import CropsRecommend from "../pages/CropsRecommend";
import RecipeList from "../pages/RecipeList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/disease" element={<Disease />} />
        <Route path="/crops" element={<Crops />} />
        <Route path="/cropsRecommend" element={<CropsRecommend />} />
        <Route path="/cropsManage" element={<CropsManage />} />
        <Route path="/cropsRegistration" element={<CropsRegistration />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipeList" element={<RecipeList />} />
        <Route path="/introduce" element={<Introduce />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
