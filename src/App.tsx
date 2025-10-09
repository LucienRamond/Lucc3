import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/navigation/Navbar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Monopage from "./pages/services/Monopage";
import Ecommerce from "./pages/services/Ecommerce";
import Quote from "./pages/contact/Quote";
import Business from "./pages/contact/Business";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/monopage" element={<Monopage />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/devis" element={<Quote />} />
        <Route path="/lentreprise" element={<Business />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
