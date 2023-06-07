import Selected from "../ThankYou";

function Main(props) {
  return (
    <div style={{ textAlign: "center" }} className="mainSelectedPage">
      <Selected rating={props.rating} />
    </div>
  );
}

export default Main;
