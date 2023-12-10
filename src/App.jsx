import { Routes, Route } from "react-router-dom";

// import NavbarComponent from "./components/NavbarComponent";
// import FooterComponent from "./components/FooterComponent";

import Index from "./pages/Index";
import Schedule from "./pages/Schedule";
import Ticket from "./pages/Ticket";
import WasBank from "./pages/WasBank";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

const App = () => {
  return ( 
  <div>
    {/* <NavbarComponent /> */}

    <Routes>
      <Route path="/" Component={Index}/>
      <Route path="/schedule" Component={Schedule}/>
      <Route path="/ticket" Component={Ticket}/>
      <Route path="/wasbank" Component={WasBank}/>
      <Route path="/login" Component={Login}/>
      <Route path="/contact" Component={Contact}/>
    </Routes>

    {/* <FooterComponent /> */}
  </div>
  );
}

export default App
