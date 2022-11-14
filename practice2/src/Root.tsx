import {Outlet} from "react-router-dom";
import Header from "./components/Header";

function Root() {
  return (
    <div>
      HELLO🙋🏻‍♀️
      <Header></Header>
      <Outlet />
    </div>
  );
}

export default Root;
