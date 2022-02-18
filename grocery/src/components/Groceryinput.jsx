import React from "react";
import { v4 } from "uuid";

export const Groceryinput = ({ onAdd }) => {
  const [value, setValue] = React.useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          if (value) {
            onAdd({ value, id: v4() });
            setValue("");
          } else {
            alert("enter value");
          }
        }}
      >
        Add
      </button>
    </div>
  );
};
