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
import CropsDetail from "../pages/CropsDetail";
import DiseaseDetail from "../pages/DiseaseDetail";
import CropsRecommendResult from "../pages/CropsRecommendResult";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/cogrow/" element={<Main />} />
        <Route path="/cogrow/disease" element={<Disease />} />
        <Route path="/cogrow/diseaseDetail" element={<DiseaseDetail />} />
        <Route path="/cogrow/crops" element={<Crops />} />
        <Route path="/cogrow/cropsRecommend" element={<CropsRecommend />} />
        <Route path="/cogrow/cropsRecommendResult" element={<CropsRecommendResult />} />
        <Route path="/cogrow/cropsManage" element={<CropsManage />} />
        <Route path="/cogrow/cropsDetail" element={<CropsDetail />} />
        <Route path="/cogrow/cropsRegistration" element={<CropsRegistration />} />
        <Route path="/cogrow/recipe" element={<Recipe />} />
        <Route path="/cogrow/recipeList" element={<RecipeList />} />
        <Route path="/cogrow/introduce" element={<Introduce />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
