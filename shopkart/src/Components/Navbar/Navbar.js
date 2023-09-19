import "./Navbar.css";
export const Navbar = () => {
  return (
    <nav className="Navbar-container">
      <section className="navbar-left">
        <span>
          <img src="/img/truck.svg" />
          &nbsp; Free Delivery
        </span>
        <span className="line"></span>
        <span>Return Policy</span>
      </section>

      <section className="navbar-links">
        <a href="">Login</a>
        <span id="follow-us">Follow US</span>
        <a href="">
          <img src="/img/facebook.svg" />
        </a>
        <a href="">
          <img src="/img/linkedin.svg" />
        </a>
        <a href="">
          <img src="/img/twitter.svg" />
        </a>
        <a href="">
          <img src="/img/instagram.svg" />
        </a>
      </section>
    </nav>
  );
};
