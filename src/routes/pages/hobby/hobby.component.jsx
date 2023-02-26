import classes from "./hobby.module.scss";
import chessImg from "../../../assets/chess.jpg";
import swimmerImg from "../../../assets/swimmer.jpg";
import dumbellImg from "../../../assets/dumbells.jpg";

const Hobby = () => {
  return (
    <div className={classes.hobby_container}>
      <div className={classes.sub_container}>
        <div className={classes.text_container}>
          "You may learn much more from a game you lose than from a game you
          win. You will have to lose hundreds of games before becoming a good
          player."
          <span>- José Capablanca</span>
        </div>
        <div className={classes.img_container}>
          <img src={chessImg} alt="chess board" />
        </div>
      </div>
      <div className={classes.sub_container}>
        <div className={classes.img_container}>
          <img src={swimmerImg} alt="swimmer" />
        </div>
        <div className={classes.text_container}>
          "I think goals should never be easy, they should force you to work,
          even if they are uncomfortable at the time."
          <span>- Michael Phelps</span>
        </div>
      </div>
      <div className={classes.sub_container}>
        <div className={classes.text_container}>
          "Mens sana in corpore sano"
          <span>- the Roman poet Juvenal.</span>
        </div>
        <div className={classes.img_container}>
          <img src={dumbellImg} alt="dumbells" />
        </div>
      </div>
    </div>
  );
};

export default Hobby;
