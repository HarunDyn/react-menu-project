import React from "react";
import "./Nav.css";

function Nav({ categories, newCategory }) {
  console.log(categories);
  return (
    <section className="container-nav">
      <ul>
        {categories.map((category) => (
          <li onClick={() => newCategory(category)}>{category}</li>
        ))}
      </ul>
    </section>
  );
}

export default Nav;
