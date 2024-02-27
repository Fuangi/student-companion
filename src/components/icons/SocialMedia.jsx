import Icon from "./Icon";
import {
  FaFacebook,
  FaSquareInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

function SocialMedia() {
  return (
    <>
      <Icon
        children={<FaFacebook className="media_icon" />}
        color="#1877f2"
        border="#1877f2"
      />
      <Icon
        children={<FaSquareInstagram className="media_icon" />}
        color="#f46f30"
        border={"#f46f30"}
      />
      <Icon children={<FaTwitter className="media_icon" />} color="#1DA1F2" />
      <Icon
        children={<FaLinkedin className="media_icon" />}
        color="#0a66c2"
        border="#0a66c2"
      />
    </>
  );
}

export default SocialMedia;
