import Selected from "./Selected";
import "./Main.css";

function Main(props) {
  return (
    <div className="main-selectedPage">
      <Selected rating={props.rating} />
    </div>
  );
}
export default Main;
