import React from "react";

function ItemUser({ name, email }) {
  return (
    <>
      <ul>
        <li>Имя: {name}</li>
        <li>Email: {email}</li>
      </ul>
    </>
  );
}

export default ItemUser;
