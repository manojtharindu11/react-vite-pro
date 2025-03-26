import React from "react";

function Fruits() {
  const fruits = ["apple", "orange", "mango", "banana", "pineapple"];
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}

export default Fruits;
