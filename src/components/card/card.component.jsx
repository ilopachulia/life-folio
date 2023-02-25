import classes from "./card.module.scss";

const Card = ({ project }) => {
  return (
    <div className={classes.card_container}>
      <img src={project.img} alt={project.title} className={classes.card_img} />
      <div className={classes.text_container}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default Card;
