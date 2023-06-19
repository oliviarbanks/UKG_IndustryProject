import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/contact.js";
import Message from "./components/Message/message.js";
import Calendar from "./components/Calendar/calendar.js";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Calendar />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/message" element={<Message />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
