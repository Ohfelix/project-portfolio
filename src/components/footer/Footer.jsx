import React from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import instagraImg from '../../assets/instagram.jpg'
import linkedinImg from '../../assets/linkedin.png'
import youtubeImg from '../../assets/youtube.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        {/*     <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul> */}

        <div className="footer__social">
          <a href="https://www.instagram.com/oleandrofelix/"
            className="footer__social-link"
            target="_blank"
          >
            <img className="social" src={instagraImg} alt="" />
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/leandro-galdino-felix-880401161/"
            className="footer__social-link"
            target="_blank"
          >
            <img className="social" src={linkedinImg} alt="" />
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCUuNfXl_M98_BAu-82HYsgg"
            className="footer__social-link"
            target="_blank"
          >
            <img className="social" src={youtubeImg} alt="" />
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          <p className="reg">  &reg; LeandrooFelix</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
