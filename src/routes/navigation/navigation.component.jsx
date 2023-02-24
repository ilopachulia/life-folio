import { Fragment } from "react";
import classes from "./navigation.module.scss";
import { NavLink, Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className={classes.navigation}>
        <Link className={classes.logo_container} to="/">
          <Logo className={classes.logo} />
        </Link>
        <div className={classes.nav_links_container}>
          <NavLink to="projects" className={classes.nav_link}>
            Projects
          </NavLink>
          <NavLink to="goals" className={classes.nav_link}>
            Goals
          </NavLink>
          <NavLink to="about" className={classes.nav_link}>
            About
          </NavLink>
          <NavLink to="contact" className={classes.nav_link}>
            Contact
          </NavLink>
          <NavLink to="github" className={classes.nav_link}>
            Github
          </NavLink>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
