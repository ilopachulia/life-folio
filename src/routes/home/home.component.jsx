import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Slider from "../../components/slider/silder.component";

const Home = () => {
  return (
    <Fragment>
      <Outlet />
      <div>
        <Slider />
      </div>
    </Fragment>
  );
};

export default Home;
