import ThankYou from "../../components/Icons/ThankYou";
import "./style.css";

function Selected(props) {
  return (
    <div className="selectedPageContent">
      <ThankYou />
      <h3>You selected {props.rating} out of 5</h3>
      <h1>Thank You!</h1>
      <p>
        We appreciate you taking the time to give a rating. if you ever need
        more support, dont hesitate to get in touch!
      </p>
    </div>
  );
}

export default Selected;
