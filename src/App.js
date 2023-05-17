import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import Cart from "./component/Cart";
import Header from "./component/Header";
import Home from "./component/Home";

import "./styles/app.scss"


function App() {
  return (
   <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
    < Toaster />
   </Router>
  );
}

export default App;
