import classes from "./button.module.scss";

export const BUTTON_TYPE_CLASSES = {
  card: "see-more",
};

const Button = ({ children, buttonType }) => {
  console.log(buttonType, "buttonType");
  return (
    <button
      className={`${classes.button_container} ${
        classes[BUTTON_TYPE_CLASSES[buttonType]]
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
