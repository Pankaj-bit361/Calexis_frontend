import { Route, Routes } from "react-router-dom";
import Home2 from "../pages/Home/Home2";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home2 />} />
    </Routes>
  );
};

export default AllRoutes;
