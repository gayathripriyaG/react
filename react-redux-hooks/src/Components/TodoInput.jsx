import React from "react";

export const TodoInput = ({ value, setValue, handleAdd }) => {
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.currentTarget.value)} />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};
