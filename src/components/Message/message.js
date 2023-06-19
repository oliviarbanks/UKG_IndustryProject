import "../Message/message.scss";
import Congrats from "../../assets2/Congrats.svg";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="message">
      <Link to="/message" className="link">
        <img className="congrats" src={Congrats}></img>
      </Link>
    </div>
  );
}

export default Contact;
