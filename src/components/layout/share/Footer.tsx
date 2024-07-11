import { FaSquareFacebook, FaSquareGithub, FaSquareTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-3 px-4">
      <div>
        <Link to={"/"}>
        <img className="w-2/3 h-30" src="/src/assets/logo.png" alt="" />
        </Link>
        
      </div>
        
      <div>
        <h2>Contact Info</h2>
        <p>Email: mdsahidulislam.sagor9@gmail.com</p>
        <p>Phone: +8807825180812</p>
      </div>
      <div>
        <h2>
            Follow Us
        </h2>
        <div>
        <FaSquareFacebook />
        <FaSquareGithub />
        <FaSquareTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
