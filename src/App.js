import { BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact/contact.js"
import Message from "./components/Message/message.js"
// import Calendar from "./components/Calendar/calendar.js"
// import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        {/* <Calendar /> */}
        {/* <Message /> */}
      </BrowserRouter>

    </div>
  );
}

export default App;
