import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { CDBInput, CDBCard, CDBCardBody, CDBBtn } from "cdbreact";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
const Contact = () => {
  const [error, setError] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const forms = e.target;
    const name = forms.user_name.value;
    const email = forms.user_email.value;
    const project = forms.user_project_name.value;
    const message = forms.message.value;

    if (name == "") {
      setError("Please Fill your name Field");
      return;
    }
    if (email == "") {
      setError("Please Fill your email Field");
      return;
    }
    if (project == "") {
      setError("Please Fill your project name Field");
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
    <div>
      <div className="title">
        <h1 className="text-center text-uppercase text-white">Contact</h1>
        <span className="text-center d-block text-white">Get Touch</span>
      </div>
      <Container className="my-5">
        <Row>
          <Col lg={6}>
            <Form ref={form} onSubmit={sendEmail}>
              <CDBCard
                style={{ width: "90%", margin: "auto", borderRadius: "15px" }}
              >
                <CDBCardBody className="mx-4">
                  <div className="text-center mt-4 mb-2">
                    <p className="h4"> Contact Me </p>
                  </div>
                  <CDBInput
                    material
                    hint="Name"
                    type="text"
                    placeholder="Enter your Name"
                    className="mt-3 mb-4"
                    name="user_name"
                  />
                  <CDBInput
                    material
                    hint="E-mail"
                    type="email"
                    placeholder="Enter your Email"
                    className="mt-3 mb-4"
                    name="user_email"
                  />
                  <CDBInput
                    material
                    hint="Project Name"
                    type="text"
                    placeholder="Project Name"
                    className="mt-3 mb-4"
                    name="user_project_name"
                  />
                  <CDBInput
                    hint="Message"
                    type="textarea"
                    placeholder="Message"
                    name="message"
                  />
                  <div>{error}</div>
                  <CDBBtn
                    color="dark"
                    type="submit"
                    className="btn-block my-3 mx-0"
                  >
                    Send
                  </CDBBtn>
                </CDBCardBody>
              </CDBCard>
            </Form>
          </Col>
          <Col lg={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
