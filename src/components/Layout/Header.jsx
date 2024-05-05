import PageNav from "../nav/PageNav";

function Header() {
  return (
    <header className="header modal-is-open">
      <div className="page-navigation">
        <PageNav />
      </div>

      <div className="header_information">
        <h1>
          Welcome to your Student <br /> Companion!
        </h1>
        <p>
          Your Student Companion, here to crush your academic goals!. We're here
          to help you plan your schedule, find resources, and even connect you
          with classmates! Let's ace this semester together!
        </p>
        <div className="header_buttons">
          <button>Join us</button>
          <button>Explore</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
