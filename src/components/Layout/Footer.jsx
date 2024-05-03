import { logo } from "../../assets";
import { SocialMedia } from "../icons/";

function Footer() {
  return (
    <div className="footer_container">
      <footer>
        <div className="logo_container">
          <img src={logo} alt="Khing's Corp" />
          <h4>KHING'S CORP</h4>
        </div>
        <div className="footer_menu">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            deleniti unde sapiente
          </p>
          <p>
            Eveniet repellat eaque nesciunt sunt, unde quidem! Officia aliquam
            tenetur numquam quo labore, iusto in
          </p>
          <p>
            Eveniet iure, officiis doloribus saepe quasi debitis vitae accusamus
            expedita mollitia nihil ducimus
          </p>
        </div>
        <div className="media_container">
          <h4>Follow Us</h4>
          <div className="social_media">
            <SocialMedia />
          </div>
        </div>
      </footer>
      <div className="copyright">
        Copyright &copy; {new Date().getFullYear()} Khink's Corp, All Rights
        Reserved
      </div>
    </div>
  );
}

export default Footer;
