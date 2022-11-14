import {useParams} from "react-router-dom";
import {users} from "../../db";

function Followers() {
  const {userId} = useParams();
  return (
    <>
      <h1>🏁 {users[Number(userId) - 1].name}'s Follower is...</h1>
      <p>🚀</p>
    </>
  );
}
export default Followers;
