import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import html5 from "../../assests/html.png";
import css3 from "../../assests/CSS3.png";
import bootstrap from "../../assests/Bootstrap.png";
import tailwindcss from "../../assests/tailwindcss.png";
import js from "../../assests/Js.png";
import reactjs from "../../assests/reactjs.png";
import firebase from "../../assests/firebase.png";
import node from "../../assests/nodejs.png";
import express from "../../assests/express.png";
import mongodb from "../../assests/mongodb.png";
import "./Skill.css";
let progressInterval = null;
const Skill = () => {
  const [progressbarhtml5, setProgressbarHTML5] = useState(0);
  const [progressbarcss, setProgressbarCSS] = useState(0);
  const [progressbarbootstrap, setProgressbarBootstrap] = useState(0);
  const [progressbartailwind, setProgressbarTailwind] = useState(0);
  const [progressbarjs, setProgressbarJS] = useState(0);
  const [progressbarreactjs, setProgressbarReactJs] = useState(0);
  const [progressbarfirebase, setProgressbarFirebase] = useState(0);
  const [progressbarnode, setProgressbarNode] = useState(0);
  const [progressbarexpress, setProgressbarExpress] = useState(0);
  const [progressbarmongo, setProgressbarMongo] = useState(0);
  useEffect(() => {
    setInterval(() => {
      progressInterval = setProgressbarHTML5((prv) => prv + 1);
    }, 30);
    setInterval(() => {
      progressInterval = setProgressbarCSS((prv) => prv + 1);
    }, 30);
    setInterval(() => {
      progressInterval = setProgressbarBootstrap((prv) => prv + 1);
    }, 30);
    setInterval(() => {
      progressInterval = setProgressbarTailwind((prv) => prv + 1);
    }, 30);
    setInterval(() => {
      progressInterval = setProgressbarJS((prv) => prv + 1);
    }, 30);
    setInterval(() => {
      progressInterval = setProgressbarReactJs((prv) => prv + 1);
    }, 30);
    setInterval(() => {
      progressInterval = setProgressbarFirebase((prv) => prv + 1);
    }, 30);
    setInterval(() => {
      progressInterval = setProgressbarNode((prv) => prv + 1);
    }, 30);
    setInterval(() => {
      progressInterval = setProgressbarExpress((prv) => prv + 1);
    }, 30);
    setInterval(() => {
      progressInterval = setProgressbarMongo((prv) => prv + 1);
    }, 30);
  }, []);

  useEffect(() => {
    if (progressbarhtml5 >= 90) {
      setProgressbarHTML5(90);
      clearInterval(progressInterval);
    }
    if (progressbarcss >= 70) {
      setProgressbarCSS(70);
      clearInterval(progressInterval);
    }
    if (progressbarbootstrap >= 85) {
      setProgressbarBootstrap(85);
      clearInterval(progressInterval);
    }
    if (progressbartailwind >= 50) {
      setProgressbarTailwind(50);
      clearInterval(progressInterval);
    }
    if (progressbarjs >= 70) {
      setProgressbarJS(70);
      clearInterval(progressInterval);
    }
    if (progressbarreactjs >= 85) {
      setProgressbarReactJs(85);
      clearInterval(progressInterval);
    }
    if (progressbarfirebase >= 80) {
      setProgressbarFirebase(80);
      clearInterval(progressInterval);
    }
    if (progressbarnode >= 60) {
      setProgressbarNode(60);
      clearInterval(progressInterval);
    }
    if (progressbarexpress >= 50) {
      setProgressbarExpress(50);
      clearInterval(progressInterval);
    }
    if (progressbarmongo >= 70) {
      setProgressbarMongo(70);
      clearInterval(progressInterval);
    }
  }, [
    progressbarhtml5,
    progressbarcss,
    progressbarbootstrap,
    progressbartailwind,
    progressbarjs,
    progressbarreactjs,
    progressbarfirebase,
    progressbarnode,
    progressbarexpress,
    progressbarmongo,
  ]);
  return (
    <div>
      <div className="title">
        <h1 className="text-center text-uppercase text-white">Skills</h1>
        <span className="text-center d-block text-white">
          My Technical Level
        </span>
      </div>
      <Container className="my-5">
        <Row>
          <Col lg={6} sm={12}>
            <div className="d-flex align-items-center justify-content-around mb-3">
              <ProgressBar
                now={progressbarhtml5}
                label={`${progressbarhtml5}%`}
                className="progresses"
              ></ProgressBar>
              <img src={html5} alt="" className="skill_icon" />
            </div>
            <div className="d-flex align-items-center justify-content-around mb-3">
              <ProgressBar
                now={progressbarcss}
                label={`${progressbarcss}%`}
                className="progresses"
              ></ProgressBar>
              <img src={css3} alt="" className="skill_icon" />
            </div>
            <div className="d-flex align-items-center justify-content-around mb-3">
              <ProgressBar
                now={progressbarbootstrap}
                label={`${progressbarbootstrap}%`}
                className="progresses"
              ></ProgressBar>
              <img src={bootstrap} alt="" className="skill_icon" />
            </div>
            <div className="d-flex align-items-center justify-content-around mb-3">
              <ProgressBar
                now={progressbartailwind}
                label={`${progressbartailwind}%`}
                className="progresses"
              ></ProgressBar>
              <img src={tailwindcss} alt="" className="skill_icon" />
            </div>
            <div className="d-flex align-items-center justify-content-around mb-3">
              <ProgressBar
                now={progressbarjs}
                label={`${progressbarjs}%`}
                className="progresses"
              ></ProgressBar>
              <img src={js} alt="" className="skill_icon" />
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <div className="d-flex align-items-center justify-content-around mb-3">
              <ProgressBar
                now={progressbarreactjs}
                label={`${progressbarreactjs}%`}
                className="progresses"
              ></ProgressBar>
              <img src={reactjs} alt="" className="skill_icon" />
            </div>
            <div className="d-flex align-items-center justify-content-around mb-3">
              <ProgressBar
                now={progressbarfirebase}
                label={`${progressbarfirebase}%`}
                className="progresses"
              ></ProgressBar>
              <img src={firebase} alt="" className="skill_icon" />
            </div>
            <div className="d-flex align-items-center justify-content-around mb-3">
              <ProgressBar
                now={progressbarnode}
                label={`${progressbarnode}%`}
                className="progresses"
              ></ProgressBar>
              <img src={node} alt="" className="skill_icon" />
            </div>
            <div className="d-flex align-items-center justify-content-around mb-3">
              <ProgressBar
                now={progressbarexpress}
                label={`${progressbarexpress}%`}
                className="progresses"
              ></ProgressBar>
              <img src={express} alt="" className="skill_icon" />
            </div>
            <div className="d-flex align-items-center justify-content-around mb-3">
              <ProgressBar
                now={progressbarmongo}
                label={`${progressbarmongo}%`}
                className="progresses"
              ></ProgressBar>
              <img src={mongodb} alt="" className="skill_icon" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skill;
