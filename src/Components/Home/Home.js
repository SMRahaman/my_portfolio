import React from "react";
import "./Home.css";
import about_photo from "../../assests/about_photo.png";
import { Button, Col, Container, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
const Home = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center home_container">
        <Col lg={6} sm={12}>
          <div className="home_info">
            <h1 className="mb-3 text-white">
              Hi I'm <b>SYED MARUF</b>
            </h1>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                500,
                "Marn Stack Developer",
                500,
              ]}
              style={{ fontSize: "25px", color: "white" }}
              repeat={Infinity}
            />

            <p className="fs-5 mt-3 text-white">
              High level experience in web design and development knowledge,
              producing quility work
            </p>
            <Button className="mt-3" variant="primary">
              Hire Me
            </Button>
          </div>
        </Col>
        <Col lg={6} sm={12} className="d-flex justify-content-center">
          <img src={about_photo} alt="" className="home_img" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
