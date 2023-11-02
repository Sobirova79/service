import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main/Main";
import Ars from "./components/pages/Ars/Ars";
import Marketing from "./components/pages/Marketing/Marketing";
import Panels from "./components/pages/Panel/Panel";
import Role from "./components/pages/Role/Role";
import Sidebar from "./components/sidebar";
import Brigades from "./components/pages/Brigades";
import Categories from "./components/pages/Categories";
import Login from "./components/pages/Login";
import AddRole from "./components/pages/AddRole";
import AddApplications from "./components/pages/AddApplications";
import AddBrigades from "./components/pages/AddBrigades";
import AddCategories from "./components/pages/AddCategories";
import Swiper from "./components/pages/Swiper";
import Swiper2 from "./components/pages/Swiper2/index2";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ars" element={<Ars />} />
          <Route path="/ars/app" element={<AddApplications />} />
          <Route path="brigades" element={<Brigades />} />
          <Route path="/brigades/addbrigade" element={<AddBrigades />} />
          <Route path="categories" element={<Categories />} />
          <Route path="/categories/addcategories" element={<AddCategories />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/panels" element={<Panels />} />
          <Route path="/role" element={<Role />} />
          <Route path="/role/:id" element={<AddRole />} />
          <Route path="/role/add" element={<AddRole />} />
          <Route path="/login" element={<Login />} />
          <Route path="/swiper" element={<Swiper />} />
          <Route path="/swiper/swiper2" element={<Swiper2 />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
