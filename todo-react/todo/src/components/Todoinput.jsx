import React from "react";
import { v4 } from "uuid";

export const Todoinput = ({ onAdd }) => {
  const [value, setValue] = React.useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button
          onClick={() => {
            if (value) {
              onAdd({ value, id: v4() });
              setValue("");
            } else {
              console.log("enter value");
            }
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
};
