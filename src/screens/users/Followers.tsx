import React from "react";
import { useOutletContext } from "react-router-dom";

  interface InameOfUser{
    nameOfUser : string
  }

function Followers() {
  const { nameOfUser } = useOutletContext<InameOfUser>();
  

  return <h1>here are {nameOfUser}의 followers</h1>;
}

export default Followers;
