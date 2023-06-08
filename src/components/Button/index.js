import "./style.scss";

function Button(props) {
  return (
    <button
      className={`submitButton ${props.rating === 0 ? "unavailable" : ""}`}
      onClick={props.onButtonClick}
    >
      SUBMIT
    </button>
  );
}

export default Button;
