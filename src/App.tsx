import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Quote from "./pages/contact/Quote";
import Business from "./pages/contact/Business";
import Footer from "./pages/footer/Footer";
import MainNavbar from "./pages/navigation/MainNavbar";
import { ContentSheet } from "./pages/content/ContentSheet";
import ToggleTheme from "./providers/ToggleTheme";
import Service1 from "./pages/services/Service1";
import Service2 from "./pages/services/Service2";
import Service3 from "./pages/services/Service3";

function App() {
  return (
    <BrowserRouter>
      <div className=" h-full grid grid-rows-[max-content_1fr_max-content]">
        <ContentSheet />
        <div className=" hidden">
          <ToggleTheme />
        </div>

        <MainNavbar />
        <div className=" flex justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service1" element={<Service1 />} />
            <Route path="/service2" element={<Service2 />} />
            <Route path="/service3" element={<Service3 />} />
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
