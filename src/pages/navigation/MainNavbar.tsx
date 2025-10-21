import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

export default function MainNavbar() {
  return (
    /** vvvv Choose the navbar alignment vvv */
    <div
      className={`bg-[var(--navbar-bg)] p-2 text-[var(--navbar-text)] border-b border-b-[var(--border)]`}
    >
      <div className={`sm:block hidden`}>
        <Navbar />
      </div>
      <div className="sm:hidden block">
        <MobileNavbar />
      </div>
    </div>
  );
}
