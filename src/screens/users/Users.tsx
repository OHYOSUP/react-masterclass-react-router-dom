import React from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import { users } from "../../db";
function Users() {
  const { userId } = useParams();
  console.log(userId);

  return (
    <div>
      <h1>
        User with it p{userId} is named : {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Outlet context={{ nameOfUser: users[Number(userId) - 1].name }} />
      {/* //* link to "/followers" 하지 않는 이유는 "/"는 절대경로라서
      //* /를 사용하면 root부터 시작한다는 의미이다. */}
      <Link to="followers">see followers</Link>
    </div>
  );
}

export default Users;
