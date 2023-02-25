import classes from "./card.module.scss";
import Button from "../button/button.component";

const Card = ({ project }) => {
  return (
    <div className={classes.card_container}>
      <img src={project.img} alt={project.title} className={classes.card_img} />
      <div className={classes.text_container}>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <Button>See More</Button>
      </div>
    </div>
  );
};

export default Card;
