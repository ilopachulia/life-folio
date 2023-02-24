import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Outlet />
      <div>Home Component</div>
    </div>
  );
};

export default Home;
