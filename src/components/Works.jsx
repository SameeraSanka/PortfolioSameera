import React from "react";
import FrontEndDeveloper from "../Assets/1.png";
import GraphicDesigner from "../Assets/3.png";
import UIUxDesigner from "../Assets/2.png";

const Work = () => {
  const workInfoData = [
    {
      image: FrontEndDeveloper,
      title: "Front End Developer",
      text: "I design responsive websites for seamless user experiences, prioritizing innovative frontend development.",
    },
    {
      image: GraphicDesigner,
      title: "Graphic Designer",
      text: "I create visually compelling designs, merging creativity with precision to convey impactful messages through graphic elements.",
    },
    {
      image: UIUxDesigner,
      title: "UI/Ux Designer",
      text: "I design intuitive and engaging user interfaces, focusing on user experience to bring digital concepts to life.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">What I Do</h1>
        <p className="primary-text">
          "I'm a versatile professional, blending skills as a UI/UX designer,
          frontend developer, and graphic designer. Crafting digital experiences
          that seamlessly merge aesthetics with functionality is my passion."
        </p>
      </div>
      <a href="" style={{ textDecoration: "none" }}>
        {" "}
        <div className="work-section-bottom">
          {workInfoData.map((data) => (
            <div className="work-section-item" key={data.title}>
              <div className="work-section-info">
                <div className="info-boxes-img-container">
                  <img src={data.image} alt="" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
              </div>
            </div>
          ))}
        </div>
      </a>
    </div>
  );
};

export default Work;
