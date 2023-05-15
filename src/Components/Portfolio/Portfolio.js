import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import portfolio_1 from "../../assests/portfolio-1.png";
import portfolio_2 from "../../assests/portfolio-2.png";
import portfolio_3 from "../../assests/portfolio-3.png";
import portfolio_4 from "../../assests/choice your player.png";
import portfolio_5 from "../../assests/smart-shop.png";
import portfolio_6 from "../../assests/WeatherAPP.png";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="title">
        <h1 className="text-center text-uppercase text-white">portfolio</h1>
        <span className="text-center d-block text-white">My Projects</span>
      </div>
      <Container className="my-5">
        <Row className="gy-3">
          <Col lg={4}>
            <div className=" rounded border border-1 border- p-5  portfolio_div ">
              <img
                src={portfolio_1}
                alt=""
                className="img-fluid portfolio_img"
              />
              <div className="icon">
                <div className="social_icon d-flex flex-column align-items-center justify-content-center">
                  <a
                    href="https://learning-website-9851c.web.app/"
                    target="_blank"
                  >
                    <AiOutlineLink className="mb-3"></AiOutlineLink>
                  </a>
                  <a
                    href="https://github.com/SMRahaman/programming-hunter-client"
                    target="_blank"
                  >
                    <AiOutlineGithub></AiOutlineGithub>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className=" rounded border border-1 border-light p-5 portfolio_div  ">
              <img
                src={portfolio_2}
                alt=""
                className="img-fluid portfolio_img"
              />
              <div className="icon">
                <div className="social_icon d-flex flex-column align-items-center justify-content-center">
                  <a
                    href="https://learning-website-9851c.web.app/"
                    target="_blank"
                  >
                    <AiOutlineLink className="mb-3"></AiOutlineLink>
                  </a>
                  <a
                    href="https://github.com/SMRahaman/programming-hunter-client"
                    target="_blank"
                  >
                    <AiOutlineGithub></AiOutlineGithub>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className=" rounded border border-1 border-light p-5 portfolio_div ">
              <img
                src={portfolio_3}
                alt=""
                className="img-fluid portfolio_img"
              />
              <div className="icon">
                <div className="social_icon d-flex flex-column align-items-center justify-content-center">
                  <AiOutlineLink className="mb-3"></AiOutlineLink>
                  <AiOutlineGithub></AiOutlineGithub>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className=" rounded border border-1 border-light p-5 portfolio_div ">
              <img
                src={portfolio_4}
                alt=""
                className="img-fluid portfolio_img"
              />
              <div className="icon">
                <div className="social_icon d-flex flex-column align-items-center justify-content-center">
                  <AiOutlineLink className="mb-3"></AiOutlineLink>
                  <AiOutlineGithub></AiOutlineGithub>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className=" rounded border border-1 border-light p-5 portfolio_div ">
              <img
                src={portfolio_5}
                alt=""
                className="img-fluid portfolio_img"
              />
              <div className="icon">
                <div className="social_icon d-flex flex-column align-items-center justify-content-center">
                  <AiOutlineLink className="mb-3"></AiOutlineLink>
                  <AiOutlineGithub></AiOutlineGithub>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className=" rounded border border-1 border-light p-5 portfolio_div ">
              <img
                src={portfolio_6}
                alt=""
                className="img-fluid portfolio_img"
              />
              <div className="icon">
                <div className="social_icon d-flex flex-column align-items-center justify-content-center">
                  <AiOutlineLink className="mb-3"></AiOutlineLink>
                  <AiOutlineGithub></AiOutlineGithub>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
