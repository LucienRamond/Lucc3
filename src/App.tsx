import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Monopage from "./pages/services/Monopage";
import Ecommerce from "./pages/services/Ecommerce";
import Quote from "./pages/contact/Quote";
import Business from "./pages/contact/Business";
import Footer from "./pages/footer/Footer";
import MainNavbar from "./pages/navigation/MainNavbar";

function App() {
  const alignNavbar = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  };

  return (
    <BrowserRouter>
      <div className=" h-full grid grid-rows-[max-content_1fr_max-content]">
        {/** vvvv Choose the navbar alignment vvv */}
        <div className={`flex ${alignNavbar.start}`}>
          <MainNavbar />
        </div>
        <div className=" flex justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/monopage" element={<Monopage />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/devis" element={<Quote />} />
            <Route path="/lentreprise" element={<Business />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
