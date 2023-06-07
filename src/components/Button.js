import "./Button.css";

function Button(props) {
  return (
    <button className="SubmitButton" onClick={props.onButtonClick}>
      SUBMIT
    </button>
  );
}

export default Button;
