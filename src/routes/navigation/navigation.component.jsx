import { Fragment } from "react";
import classes from "./navigation.module.scss";
import { NavLink, Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import DownloadButton from "../../components/download-button/download-button.component";

const Navigation = () => {
  return (
    <Fragment>
      <div className={classes.navigation}>
        <Link className={classes.logo_container} to="/">
          <Logo className={classes.logo} />
        </Link>
        <div className={classes.nav_links_container}>
          <NavLink
            to="projects"
            className={({ isActive }) =>
              isActive ? `${classes.active}` : `${classes.nav_link}`
            }
          >
            Projects
          </NavLink>
          <DownloadButton styles="download_button">
            Download RESUME
          </DownloadButton>
          <NavLink
            to="education"
            className={({ isActive }) =>
              isActive ? `${classes.active}` : `${classes.nav_link}`
            }
          >
            Education
          </NavLink>
          <NavLink
            to="https://github.com/Makata1962"
            target="_blank"
            rel="noopener"
            className={classes.nav_link}
          >
            Github
          </NavLink>
          <NavLink
            to="https://medium.com/@il.pachulia"
            target="_blank"
            rel="noopener"
            className={classes.nav_link}
          >
            Blog
          </NavLink>
          <NavLink
            to="hobby"
            className={({ isActive }) =>
              isActive ? `${classes.active}` : `${classes.nav_link}`
            }
          >
            Hobby
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? `${classes.active}` : `${classes.nav_link}`
            }
          >
            Contact
          </NavLink>
          
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
