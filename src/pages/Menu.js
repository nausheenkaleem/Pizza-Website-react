import React from "react";
import { MenuList } from "../help/List";
import MenuItem from "../components/MenuItems";
import '../style/Menu.css';

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image} name={menuItem.name} price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Menu;
