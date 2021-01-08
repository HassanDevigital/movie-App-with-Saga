import React from "react";
import { Link } from "react-router-dom";
import footer from "../../assets/images/footer.svg";
import "../../styles/styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <img className="footer-logo" src={footer} alt="show" />
      </Link>

      <ul className=" menu">
        <li>
          <Link className="footer-link" to="/">
            Movies
          </Link>
        </li>
        <li>
          <Link className="footer-link" to="/tvshows">
            TV Shows
          </Link>
        </li>
        <li>
          <Link className="footer-link" to="/people">
            People
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
