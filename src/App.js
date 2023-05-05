import { BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact/contact.js"
import Header from "./components/Header/Header.js";
import Message from "./components/Message/message.js"
import Calendar from "./components/Calendar/calendar.js"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>

  );
}

export default App;
