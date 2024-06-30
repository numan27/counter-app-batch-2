import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import RouterConfig from "./components/RouterConfig";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import AppLayout from "./components/AppLayout";
import "./app.css";

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AppLayout>
    </Router>


  );
}

export default App;
