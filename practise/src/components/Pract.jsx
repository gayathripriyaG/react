import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export const Pract = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "buy milk",
    },
    {
      id: 2,
      checked: true,
      item: "buy bread",
    },
    {
      id: 3,
      checked: false,
      item: "buy jam",
    },
  ]);

  const handleChange = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };
  const handleDelete = (id) => {
    const newList = items.filter((item) => item.id !== id);
    setItems(newList);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleChange(item.id)}
              checked={item.checked}
            />
            <label
              style={item.checked ? { textDecoration: "line-through" } : null}
            >
              {item.item}
            </label>
            <FaTrashAlt
              onClick={() => handleDelete(item.id)}
              role="button"
              tabIndex="0"
              aria-label={`Delete ${item.item}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
