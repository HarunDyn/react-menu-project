import React from "react";
import "./Menu.css";

function Menu({ menu }) {
  return (
    <section className="container">
      {menu.map((menuItem) => {
        const { id, title, price, img, desc } = menuItem;

        return (
          <div className="card-menu" key={id}>
            <img src={img} alt={title} />
            <div className="title-price-desc">
              <div className="card-price-title">
                <h4>{title}</h4>
                <p>$ {price}</p>
              </div>
              <hr />
              <p className="desc">{desc}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Menu;
