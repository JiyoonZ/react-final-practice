import {useParams} from "react-router-dom";
import {users} from "../../db";

function User() {
  const {userId} = useParams();
  return (
    <>
      <h1>{users[Number(userId) - 1].name}</h1>
      <p>users with it {userId} </p>
    </>
  );
}

export default User;
