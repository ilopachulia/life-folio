import classes from "./contact.module.scss";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={classes.contact_container}>
      <div className={classes.sub_container}>
        <span>
          <BsPhoneVibrateFill />
        </span>
        +995 592 102 793
      </div>
      <div className={classes.sub_container}>
        <span>
          <MdEmail />
        </span>
        il.pachulia@gmail.com
      </div>
      <div className={classes.social_page_container}>
        <a
          href="https://www.linkedin.com/in/iliapachulia/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Makata1962"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/ilo.pachulia98/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare />
        </a>
      </div>
    </div>
  );
};

export default Contact;
