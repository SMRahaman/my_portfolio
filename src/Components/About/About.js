import React, { useState } from "react";
import "./About.css";
import my_photo from "../../assests/my_photo.jpeg";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  const [update, setUpdate] = useState(1);
  const tabHandler = (id) => {
    setUpdate(id);
  };
  return (
    <div>
      <div className="title">
        <h1 className="text-center text-uppercase text-white">About</h1>
        <span className="text-center d-block text-white">My Intruduction</span>
      </div>
      <Container className="my-5">
        <Row>
          <Col lg={6} sm={12}>
            <img
              src={my_photo}
              alt=""
              className="img-fluid about_photo rounded-circle"
            />
          </Col>
          <Col lg={6} sm={12}>
            <div className="text-white d-flex justify-content-around tab_link">
              <li
                className={update === 1 ? "link-active" : "link"}
                onClick={() => tabHandler(1)}
              >
                Introduction
              </li>
              <li
                className={update === 2 ? "link-active" : "link"}
                onClick={() => tabHandler(2)}
              >
                Eductaion
              </li>
              <li
                className={update === 3 ? "link-active" : "link"}
                onClick={() => tabHandler(3)}
              >
                Work Experience
              </li>
              <li
                className={update === 4 ? "link-active" : "link"}
                onClick={() => tabHandler(4)}
              >
                Training
              </li>
            </div>
            <div className="info-content mt-5">
              <div className={update === 1 ? "show-content " : "content"}>
                <h2 className="mb-3 tab-title">My Introduction</h2>
                <p className="fs-5">
                  My name is Syed Marufur Rahman. I live in Bangladesh. My home
                  district Barsial. I have passed the BSC(Becholar of Computer
                  Science)in 2021. My hobbies Cricket, Football, Coding. I am
                  now doing IT support engneering job but I want to be a MERN
                  stack developer.
                </p>
              </div>
              <div className={update === 2 ? "show-content " : "content"}>
                <h2 className="mb-3 tab-title">Education</h2>
                <div>
                  <h5>1. Secondary School Certificate</h5>
                  <p>Passing Year: 2014</p>
                  <p>GPA: 4.69 out of 5</p>
                </div>
                <div>
                  <h5>2. Diploma in Computer Technology</h5>
                  <p>Passing Year: 2018</p>
                  <p>CGPA: 3.33 out of 4</p>
                </div>
                <div>
                  <h5>3. Bachelor Degree in CSE</h5>
                  <p>Passing Year: 2021</p>
                  <p>CGPA: 3.09 out of 4</p>
                </div>
              </div>
              <div className={update === 3 ? "show-content " : "content"}>
                <h2 className="mb-3 tab-title">Work Experience</h2>
                <div>
                  <h5>1. Junior IT Officer</h5>
                  <p>Job Period: 2018-2019</p>
                </div>
                <div>
                  <h5>2. Maintenance Assitant (IT)</h5>
                  <p>Job Period: 2019-Present</p>
                </div>
              </div>
              <div className={update === 4 ? "show-content " : "content"}>
                <h2 className="mb-3 tab-title">Training</h2>
                <div>
                  <h5>1. Basic MicroTik Course (MTCNA)</h5>
                  <p>Traning Period: 2020(June-Augest)</p>
                </div>
                <div>
                  <h5>2. Programming Hero</h5>
                  <p>Traning Period:2022-Present</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
