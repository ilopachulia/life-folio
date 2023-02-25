import classes from "./card.module.scss";
import Button from "../button/button.component";
import { Link } from "react-router-dom";

const Card = ({ project }) => {
  return (
    <div className={classes.card_container}>
      <img src={project.img} alt={project.title} className={classes.card_img} />
      <div className={classes.text_container}>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <Link to={project.website} target="_blank" rel="noopener">
          <Button buttonType="card">See More</Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
