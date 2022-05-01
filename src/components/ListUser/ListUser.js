import React from "react";
import { useSelector } from "react-redux";
import ItemUser from "../ItemUser/ItemUser";

function ListUser() {
  const people = useSelector((state) => state.people);
  return (
    <>
      {people.map((el) => (
        <ItemUser key={el.id} name={el.name} email={el.email} />
      ))}
    </>
  );
}

export default ListUser;
