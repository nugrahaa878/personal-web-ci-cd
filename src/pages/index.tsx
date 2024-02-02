import { Route, Routes } from "react-router-dom";
import Homepage from "./Home";
import Article from "./Article";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/article" element={<Article />} />
    </Routes>
  );
};

export default MainRoutes;
