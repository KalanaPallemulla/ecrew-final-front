import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Client/pages/Home";
import NavBar from "./Client/components/NavBar";
import About from "./Client/pages/About";
import ContactUs from "./Client/pages/ContactUs";
import Footer from "./Client/components/Footer";
import Services from "./Client/pages/Services";
// admin screens import
import AddingForm from "./Admin/AddingForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        {/* Admin forms */}
        <Route path="/admin" exact component={AddingForm}></Route>

        <Route path="/" exact component={Home}></Route>
        <Route path="/AboutUs" exact component={About}></Route>
        <Route path="/contactUs" exact component={ContactUs}></Route>
        <Route path="/Services" exact component={Services}></Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
