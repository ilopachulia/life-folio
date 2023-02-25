import classes from "./button.module.scss";

export const BUTTON_TYPE_CLASSES = {
  google: "see-more",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`${classes.button_container} ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
