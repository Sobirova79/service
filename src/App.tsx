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
import Applications from "./components/pages/Applications";
import Container from "./components/Container";
import Login from "./components/pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ars" element={<Ars />} />
          <Route path="brigades" element={<Brigades />} />
          <Route path="categories" element={<Categories />} />
          <Route path="applications" element={<Applications />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/panels" element={<Panels />} />
          <Route path="/role" element={<Role />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
