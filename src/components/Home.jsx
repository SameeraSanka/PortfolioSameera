import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CV from "../Assets/Sameera-Madusanka.pdf";
import { Link } from "react-router-dom";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Front end Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  // ----------------------------------------------------------------
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Hi, I am <span style={{ color: "#fe9e0d" }}>Sameera</span>
          </h1>
          <h2 className="primary-heading2">
            a <span>{text}</span>
            <Cursor
              cursorBlinking="false"
              cursorStyle="|"
              cursorColor="#fe9e0d"
            />
          </h2>

          <p className="primary-text">
            As a skilled professional, I excel in coding, front-end development,
            and UI design. My expertise combines technical proficiency with a
            keen eye for creating engaging user experiences.
          </p>

          {/* <Link
            className="secondary-button"
            to={CV}
            download="Example-PDF-document"
            target="_blank"
            rel="noreferrer"
          >
            Download file
          </Link> */}

          <a
            href={CV}
            download="Example-PDF-document"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none'}}
          >
            {" "}
            <button className="secondary-button">
              Download my CV <FiArrowRight />{" "}
            </button>
          </a>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
