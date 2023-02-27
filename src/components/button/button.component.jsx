import classes from "./button.module.scss";

export const BUTTON_TYPE_CLASSES = {
  card: "see-more",
};

const Button = ({ children, buttonType, otherProps }) => {
  return (
    <button
      className={`${classes.button_container} ${
        classes[BUTTON_TYPE_CLASSES[buttonType]]
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
