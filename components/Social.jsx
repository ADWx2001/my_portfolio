import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, link: "" },
  { icon: <FaLinkedinIn />, link: "" },
  { icon: <FaFacebook />, link: "" },
  { icon: <FaInstagram />, link: "" },

];

function Social({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.link} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Social;