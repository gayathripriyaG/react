import React, { useState } from "react";
import { Groceryinput } from "./Groceryinput";
import { GroceryList } from "./GroceryList";

export const Grocery = () => {
  const [groceries, setGroceries] = useState([]);
  const onDeleteItem = (itemToDelete) => {
    const newGroceryList = groceries.filter(
      (grocery) => grocery.id !== itemToDelete.id
    );
    setGroceries(newGroceryList);
  };
  const onAdd = (newGrocery) => {
    setGroceries([...groceries, newGrocery]);
  };

  return (
    <div>
      <Groceryinput onAdd={onAdd} />
      <div>
        <ul>
          {groceries.map((grocery) => {
            return (
              <GroceryList
                key={grocery.id}
                onDeleteItem={onDeleteItem}
                grocery={grocery}
                setGroceries={setGroceries}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
