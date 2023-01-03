import React from "react";
import { users } from "../db";
import { Link, useSearchParams } from "react-router-dom";
function Home() {
  const [readSerachParams, setSearchParams] = useSearchParams();
  // console.log(readSerachParams)
  // setSearchParams({
  //   day:'today',
  //   tomorrow: "123"
  // })
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((item) => (
          <Link to={`/user/${item.id}`} key={item.id}>
            <li>{item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Home;
