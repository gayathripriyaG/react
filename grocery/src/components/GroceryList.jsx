import React from "react";

export const GroceryList = ({ onDeleteItem, grocery }) => {
  return (
    <div>
      {grocery.value}
      <button onClick={() => onDeleteItem(grocery)}>delete</button>
    </div>
  );
};
