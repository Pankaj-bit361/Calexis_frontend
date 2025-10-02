import AllSvg from "./AllSvg";

const Navbar = () => {
  return (
    <nav className="navbar flex items-center justify-between bg-[#060811] px-[120px] py-5">
      <section className="nav-section flex gap-2 items-center justify-center">
        <div>
          <AllSvg type="CalexisLogo" />
        </div>
        <p className="text-[28px] leading-[32px] text-white cursor-pointer">
          Calaxis
        </p>
      </section>
      <section className="nav-section text-white flex py-2 items-center justify-center px-3 gap-3 navbar_items_section">
        <p className="px-3 cursor-pointer">Home</p>
        <p className="px-3 cursor-pointer">Products</p>
        <p className="px-3 cursor-pointer">Pricing</p>
        <p className="px-3 cursor-pointer">Blog</p>
        <p className="px-3 cursor-pointer">Contact</p>
      </section>
      <section className="nav-section">
        <button className="nav-section-button flex min-h-[32px] px-3 py-[6px] justify-center items-center gap-[6px] text-[16px] leading-6 geist-font text-white rounded-[733px]">
          Get started
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
