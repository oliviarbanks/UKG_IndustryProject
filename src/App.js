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
        {/* <Footer /> */}
      </BrowserRouter>

    </div>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/calendar" element={<Calendar />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
