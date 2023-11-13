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
        <Route path="/" element={<Main />} />
        <Route path="/disease" element={<Disease />} />
        <Route path="/diseaseDetail" element={<DiseaseDetail />} />
        <Route path="/crops" element={<Crops />} />
        <Route path="/cropsRecommend" element={<CropsRecommend />} />
        <Route path="/cropsRecommendResult" element={<CropsRecommendResult />} />
        <Route path="/cropsManage" element={<CropsManage />} />
        <Route path="/cropsDetail" element={<CropsDetail />} />
        <Route path="/cropsRegistration" element={<CropsRegistration />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/recipeList" element={<RecipeList />} />
        <Route path="/introduce" element={<Introduce />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
