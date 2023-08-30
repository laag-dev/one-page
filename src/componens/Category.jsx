import React from "react";
import Hijo from "./Main";

export const Category = (props) => {
  return (
    <ul
      tabIndex={0}
      className="menu  dropdown-content mt-3 z-[1] p-2 shadow text-white rounded-box w-42"
    >
      <li>
        <a>Inicio</a>
      </li>
      <li>
        <a>{props.itemOne}</a>
      </li>
      <li>
        <a>{props.itemTwo}</a>
      </li>
      <li>
        <a>{props.itemThree}</a>
      </li>
    </ul>
  );
};

export default Category;
