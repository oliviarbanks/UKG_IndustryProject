import "../Contact/contact.scss";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <h2 className="title">May we contact you?</h2>
      <h3 className="subtitle">
        Please select the dates that would be ok for us to contact you if
        needed.
      </h3>
      <form className="contact-message">
        <div class="form-checkbox1">
          <input type="checkbox" id="checkbox1"></input>
          <p className="mon">Mon</p>
          <label for="checkbox1">March 5th, 2023</label>
        </div>
        <div class="form-checkbox1">
          <input type="checkbox" id="checkbox1"></input>
          <p className="tues">Tues</p>
          <label for="checkbox1">March 6th, 2023</label>
        </div>
        <div class="form-checkbox1">
          <input type="checkbox" id="checkbox1"></input>
          <p className="weds">Weds</p>
          <label for="checkbox1">March 7th, 2023</label>
        </div>
        <div class="form-checkbox1">
          <input type="checkbox" id="checkbox1"></input>
          <p className="thurs">Thurs</p>
          <label for="checkbox1">March 8th, 2023</label>
        </div>
        <div class="form-checkbox1">
          <input type="checkbox" id="checkbox1"></input>
          <p className="frid">Fri</p>
          <label for="checkbox1">March 9th, 2023</label>
        </div>
        <div class="form-checkbox1">
          <input type="checkbox" id="checkbox1"></input>
          <p className="sat">Sat</p>
          <label for="checkbox1">March 10th, 2023</label>
        </div>
        <div class="form-checkbox1">
          <input type="checkbox" id="checkbox1"></input>
          <p className="sun">Sun</p>
          <label for="checkbox1">March 11th, 2023</label>
        </div>
        <Link className="link" to="/calendar/contact/message">
          <button className="share-availability">Share My Availability</button>
        </Link>
      </form>
    </div>
  );
}

export default Contact;
