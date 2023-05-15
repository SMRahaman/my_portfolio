import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { CDBInput, CDBCard, CDBCardBody, CDBBtn } from "cdbreact";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { AiOutlinePhone, AiTwotoneMail } from "react-icons/ai";
import { BsFacebook, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import "./Contact.css";
const Contact = () => {
  const [error, setError] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const forms = e.target;
    const name = forms.user_name.value;
    const email = forms.user_email.value;
    const message = forms.message.value;

    if (name == "") {
      setError("Please Fill your name Field");
      return;
    }
    if (email == "") {
      setError("Please Fill your email Field");
      return;
    }

    if (message == "") {
      setError("Please Fill your message Field");
      return;
    }
    emailjs
      .sendForm(
        "service_zl0bhts",
        "template_yzh2nn8",
        form.current,
        "fmJqkkPscd3Dn-gW3"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
          forms.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact">
      <div className="title">
        <h1 className="text-center text-uppercase text-white">Contact</h1>
        <span className="text-center d-block text-white">Get Touch Me</span>
      </div>
      <Container className="my-5">
        <Row className="info_part">
          <Col lg={6}>
            <Form ref={form} onSubmit={sendEmail}>
              <CDBCard
                style={{
                  width: "90%",
                  margin: "auto",
                  borderRadius: "15px",
                  padding: "20px 0px",
                }}
              >
                <CDBCardBody className="mx-4">
                  <CDBInput
                    color="none"
                    type="text"
                    placeholder="Enter your Name"
                    className="mt-3 mb-4"
                    name="user_name"
                  />
                  <CDBInput
                    color="none"
                    type="email"
                    placeholder="Enter your Email"
                    className="mt-3 mb-4"
                    name="user_email"
                  />

                  <CDBInput
                    type="textarea"
                    placeholder="Message"
                    name="message"
                    color="none"
                  />
                  <div>{error}</div>
                  <CDBBtn
                    color="dark"
                    type="submit"
                    className="btn-block my-3 mx-0 text-center"
                    value="submit"
                  >
                    Send Message
                  </CDBBtn>
                </CDBCardBody>
              </CDBCard>
            </Form>
          </Col>
          <Col lg={6}>
            <div className="info_link text-white d-flex flex-column">
              <div className="d-flex aling-items-center mb-5">
                <AiOutlinePhone className="fs-3 text-danger" />
                <p className="fs-5 ms-3 m-0">01405615433</p>
              </div>
              <div className="d-flex aling-items-center mb-5 ">
                <AiTwotoneMail className="fs-3 text-danger" />
                <p className="fs-5 ms-3 m-0 ">marufshohan121@gmail.com</p>
              </div>
              <div className="social-icon mt-3">
                <BsFacebook className="fb" />
                <BsWhatsapp className="wa" />
                <BsLinkedin className="lni" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
