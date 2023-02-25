import classes from "./projects.module.scss";
import Card from "../../../components/card/card.component";
import { DUMMY_PROJECTS } from "../../../helper/project-list";

const Projects = () => {
  return (
    <div className={classes.projects_container}>
      {DUMMY_PROJECTS.map((project) => {
        return <Card key={project.id} project={project} />;
      })}
    </div>
  );
};

export default Projects;
