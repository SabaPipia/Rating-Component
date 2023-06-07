import "./Button.css";

function Button(props) {
  return (
    <button className="submitButton" onClick={props.onButtonClick}>
      SUBMIT
    </button>
  );
}

export default Button;
