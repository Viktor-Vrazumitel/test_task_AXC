import React from "react";
import { useSelector } from "react-redux";

function HomePage() {
  const user = useSelector(state=> state.user)
  return (
    <>
    {user ? <h1>Welcom {user.name}</h1> : <h1>Welcom</h1>}
    </>
  );
}

export default HomePage;
