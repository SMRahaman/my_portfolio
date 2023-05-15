import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Service.css";
const Service = () => {
  const services = [
    {
      id: 1,
      icon: "https://cdn-icons-png.flaticon.com/512/3159/3159310.png",
      title: "Web Desgin & Development",
      paragraph:
        "I can design any website of your choice. The design will be very attractive and user friendly.",
    },
    {
      id: 2,
      icon: "https://cdn-icons-png.flaticon.com/512/2703/2703934.png",
      title: "Responsive Design",
      paragraph:
        "Your website will be 100% responsive, user friendly and support in all standard devices.",
    },
    {
      id: 3,
      icon: "https://cdn-icons-png.flaticon.com/512/15/15511.png",
      title: "Bug Fix",
      paragraph:
        " I will fix CSS, JS, ReactJS, NodeJS, MongoDB or any kind of bugs. I also Add new feature/Section/Plugin with awesome effects.",
    },
    {
      id: 4,
      icon: "https://www.nicepng.com/png/full/251-2518352_png-file-tech-support-icon-png.png",
      title: "Dedicated Support",
      paragraph:
        "Client’s Satisfaction is the first & foremost responsibility to me. I will offer unlimited revesion.",
    },
  ];
  return (
    <div id="service">
      <div className="title">
        <h1 className="text-center text-uppercase text-white">Service</h1>
        <span className="text-center d-block text-white">My service</span>
      </div>
      <Container className="my-5">
        <Row className="g-4">
          {services.map((service) => (
            <Col lg={4} sm={12} key={service.id}>
              <div className="sevice-section-part rounded">
                <div className="service_icon mt-3">
                  <img
                    src={service.icon}
                    alt=""
                    className="img-fluid d-block m-auto"
                  />
                </div>
                <div className="text-center mt-3">
                  <h3>{service.title}</h3>
                </div>
                <div className="text-center mt-3 ">
                  <p>{service.paragraph}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Service;
