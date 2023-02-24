import classes from "./slider.module.scss";
import image from "../../assets/profilepic.png";

const Slider = () => {
  return (
    <div className={classes.slider_container}>
      <div className={classes.text_container}>
        Welcome to my page! <br />
        I'm a <span>React Developer</span>
        <br />
        and
        <span>Coding Enthusiast</span>!
      </div>
      <div className={classes.img_container}>
        <img src={image} alt="Author" />
      </div>
    </div>
  );
};

export default Slider;
