import {useOutletContext, useParams} from "react-router-dom";
import {users} from "../../db";

interface IFollowersContext {
  nameOfMyUser: string;
}
function Followers() {
  const {nameOfMyUser} = useOutletContext<IFollowersContext>();
  return (
    <>
      <h2>🏁 {nameOfMyUser}'s Follower is...</h2>
      <p>🚀</p>
    </>
  );
}
export default Followers;
