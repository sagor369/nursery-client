import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaSquareGithub, FaSquareTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-3 px-4 mx-2 py-2">
      <div>
        <Link to={"/"}>
        <img className="w-2/3 h-30" src="/src/assets/logo.png" alt="" />
        </Link>
        
      </div>
        
      <div>
        <h2 className=" font-semibold pb-1">Contact Info</h2>
        <p>Email: mdsahidulislam.sagor9@gmail.com</p>
        <p>Phone: +8807825180812</p>
      </div>
      <div className="text-center">
        <h2 className=" font-semibold pb-1">
            Follow Us
        </h2>
        <div className="flex gap-4 justify-center">
          <Link to={'https://facebook.com/sahedul369'} target="_blank">
          <FaSquareFacebook className="size-6 "/>

          </Link>
          <Link target="_blank" to={'https://www.linkedin.com/in/md-sahedul-islam-sagor-90a7b8234?'}>
          <FaLinkedin className="size-6 "/>
          </Link>
          <Link target="_blank" to={'https://github.com/sagor369'}>
          <FaSquareGithub className="size-6 "/>
          </Link>
          <Link target="_blank" to={' https://twitter.com/Sahiduli369?t=4QAQzur6bWXvw3FrImCp0Q&s=08'}>
          <FaSquareTwitter className="size-6 "/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
