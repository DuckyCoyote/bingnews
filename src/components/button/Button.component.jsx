import "./Button.styles.css";

const Button = ({ child, ...props }) => {
  return (
    <button className="btn" {...props}>
      {child}
    </button>
  );
};

export default Button;
