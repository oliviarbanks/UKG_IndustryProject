import "../Contact/contact.scss";


function Contact() {
    return (
        <div>
            <h2 className="question">May we contact you?</h2>
            <form className="contact-message">If we are in need, would you be interested in covering shifts while on vacation?
                <div class="form-checkbox1">
                    <input type="checkbox" id="checkbox1"></input>
                    <p>Mon</p>
                    <label for="checkbox1">March 5th, 2023</label>
                </div>
                <div class="form-checkbox1">
                    <input type="checkbox" id="checkbox1"></input>
                    <p>Tues</p>
                    <label for="checkbox1">March 6th, 2023</label>
                </div>
                <div class="form-checkbox1">
                    <input type="checkbox" id="checkbox1"></input>
                    <p>Weds</p>
                    <label for="checkbox1">March 7th, 2023</label>
                </div>
                <div class="form-checkbox1">
                    <input type="checkbox" id="checkbox1"></input>
                    <p>Thurs</p>
                    <label for="checkbox1">March 8th, 2023</label>
                </div>
                <div class="form-checkbox1">
                    <input type="checkbox" id="checkbox1"></input>
                    <p>Fri</p>
                    <label for="checkbox1">March 9th, 2023</label>
                </div>
                <div class="form-checkbox1">
                    <input type="checkbox" id="checkbox1"></input>
                    <p>Sat</p>
                    <label for="checkbox1">March 10th, 2023</label>
                </div>
                <div class="form-checkbox1">
                    <input type="checkbox" id="checkbox1"></input>
                    <p>Sun</p>
                    <label for="checkbox1">March 11th, 2023</label>
                </div>
            </form>
        </div>
    );
}

export default Contact;