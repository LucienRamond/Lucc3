import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

export default function MainNavbar() {
  return (
    <div className=" p-2">
      <div className="sm:block hidden">
        <Navbar />
      </div>
      <div className="sm:hidden block">
        <MobileNavbar />
      </div>
    </div>
  );
}
