// import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import Topbar from "./components/topbar/Topbar";
// import Topdish from "./components/topdishes/Topdish";
// import Comments from "./components/userComments/Comments";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Menu from "./components/pages/menu/Menu";
import Gallery from "./components/pages/gallery/Gallery";
import Contact from "./components/pages/contact/Contact";
import Footer from "./components/footer/Footer";



function App() {
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
