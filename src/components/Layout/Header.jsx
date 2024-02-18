// import { header_image } from "../../assets";
import PageNav from "../nav/PageNav";

function Header() {
  return (
    <header className="header">
      <div className="page-navigation">
        <PageNav />
      </div>

      <div className="header_information">
        <h1>Welcome to your Student Companion!</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
          suscipit deserunt incidunt molestiae vitae animi dolores sequi
          repellat quasi tenetur facilis nesciunt voluptatum placeat cupiditate,
          fugit officia maxime fuga! Voluptatem.
        </p>
        <div className="header_buttons">
          <button>Know More</button>
          <button>Explore</button>
        </div>
      </div>
      {/*       <div className="header_image">
        <img src={header_image} alt="Relaxing Student" />
      </div> */}
    </header>
  );
}

export default Header;
