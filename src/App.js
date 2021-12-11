import React, { useState } from "react";
import Data from "./data";
import Menu from "./components/menucard/Menu";
import Nav from "./components/navcard/Nav";
import "./App.css";

const onlyCategories = new Set(Data.map((item) => item.category));

function App() {
  const [menu, setMenu] = useState(Data);
  const [categories, setCategories] = useState(["all", ...onlyCategories]);

  const newCategory = (category) => {
    if (category === "all") {
      return setMenu(Data);
    }
    const newMenu = Data.filter((item) => item.category === category);
    setMenu(newMenu);
  };

  return (
    <>
      <Nav categories={categories} newCategory={newCategory} />
      <Menu menu={menu} />
    </>
  );
}

export default App;
