import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import portfolio_1 from "../../assests/portfolio-1.png";
import portfolio_2 from "../../assests/portfolio-2.png";
import portfolio_3 from "../../assests/portfolio-3.png";
import portfolio_4 from "../../assests/choice your player.png";
import portfolio_5 from "../../assests/smart-shop.png";
import portfolio_6 from "../../assests/WeatherAPP.png";
import "./Portfolio.css";
const Portfolio = () => {
  return (
    <div>
      <div className="title">
        <h1 className="text-center text-uppercase text-white">portfolio</h1>
        <span className="text-center d-block text-white">My Projects</span>
      </div>
      <Container className="my-5">
        <Row className="gy-3">
          <Col lg={4}>
            <div className=" rounded border border-1 border-light p-3  portfolio_div ">
              <img
                src={portfolio_1}
                alt=""
                className="img-fluid portfolio_img"
              />
              <div className="text-white">
                <h6 className="mb-0 mt-3">Project Name: Programming Hunter</h6>
                <span>
                  Language/Freamework: ReactJS, React Bootstrap, React-Router,
                  Expressjs, Firebase
                </span>
              </div>
              <div className="mt-3 text-end">
                <Button variant="primary" className="me-3">
                  Code View
                </Button>
                <Button variant="success">Live Site</Button>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className=" rounded border border-1 border-light p-3 portfolio_div  ">
              <img
                src={portfolio_2}
                alt=""
                className="img-fluid portfolio_img"
              />
              <div className="text-white">
                <h6 className="mb-0 mt-3">Project Name: Dev Quiz</h6>
                <span>
                  Language/Freamework: ReactJS, React Bootstrap, React-Router
                </span>
                <div className="mt-3 text-end">
                  <Button variant="primary" className="me-3">
                    Code View
                  </Button>
                  <Button variant="success">Live Site</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className=" rounded border border-1 border-light p-3 portfolio_div ">
              <img
                src={portfolio_3}
                alt=""
                className="img-fluid portfolio_img"
              />
              <div className="text-white">
                <h6 className="mb-0 mt-3">Project Name: Esho-Shikhi</h6>
                <span>Language/Freamework: Bootstrap, HTML, CSS3</span>
                <div className="mt-3 text-end">
                  <Button variant="primary" className="me-3">
                    Code View
                  </Button>
                  <Button variant="success">Live Site</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className=" rounded border border-1 border-light p-3 portfolio_div ">
              <img
                src={portfolio_4}
                alt=""
                className="img-fluid portfolio_img"
              />
              <div className="text-white">
                <h6 className="mb-0 mt-3">
                  Project Name:Player choice & Calculate
                </h6>
                <span>
                  Language/Freamework: Bootstrap, Javascript, HTML, CSS3
                </span>
                <div className="mt-3 text-end">
                  <Button variant="primary" className="me-3">
                    Code View
                  </Button>
                  <Button variant="success">Live Site</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className=" rounded border border-1 border-light p-3 portfolio_div ">
              <img
                src={portfolio_5}
                alt=""
                className="img-fluid portfolio_img"
              />
              <div className="text-white">
                <h6 className="mb-0 mt-3">Project Name: Smart-Shop</h6>
                <span>
                  Language/Freamework: React-Bootstrap, React-Router, ReactJS
                </span>
                <div className="mt-3 text-end">
                  <Button variant="primary" className="me-3">
                    Code View
                  </Button>
                  <Button variant="success">Live Site</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className=" rounded border border-1 border-light p-3 portfolio_div ">
              <img
                src={portfolio_6}
                alt=""
                className="img-fluid portfolio_img"
              />
              <div className="text-white">
                <h6 className="mb-0 mt-3">Project Name: Weather APP</h6>
                <span>Language/Freamework:HTML,CSS3, Javascript, Rest API</span>
                <div className="mt-3 text-end">
                  <Button variant="primary" className="me-3">
                    Code View
                  </Button>
                  <Button variant="success">Live Site</Button>
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
