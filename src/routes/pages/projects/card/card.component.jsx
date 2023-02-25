import classes from "./card.module.scss";

const Card = ({ project }) => {
  return (
    <div className={classes.card_container}>
      <img src="/src/assets/profilepic.png" alt={project.description} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default Card;
