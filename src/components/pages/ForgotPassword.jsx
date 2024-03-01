import { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "../../api/axios";

import { Imagesdata } from "../../common/commonimages";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);


  
  useEffect(( ) => {
		// Attach the event listener to the document
		document.addEventListener('keydown', handleKeyPress);
		// Clean up the event listener when the component unmounts
		return () => {
		document.removeEventListener('keydown', handleKeyPress);
		};
	}, []);

  const handleKeyPress = (event, nextFieldRef) => {
    if (event.key === 'Enter') {
      event.preventDefault();
			// Call your login function or handle form submission here
			document.getElementById('send').click();
		}
	};

  const handleForgotPassword = async () => {
	setError("");
	setMessage('');
    setIsLoading(true);
    try {
      const response = await axios.post("/forgot-password", {
        email: email,
      });
      
      if (response.data.status === "200") {
		setIsSuccess(true);
        setMessage(response.data);
        setError("");
        console.log("successful", response.data);
      } else {
		setMessage('');
        setError(response.data);
        console.error("failed");
      }
    } catch (error) {
      console.error("Error", error);
    } finally {
      // Hide spinner and show button again
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="">
        <Row className="no-gutter">
          <Col
            md={6}
            lg={6}
            xl={7}
            className="d-none d-md-flex bg-primary-transparent p-0"
          >
            <Row className="wd-108p ">
              <Col md={12} lg={12} xl={12} className="my-auto mx-auto wd-108p">
                <img
                  src={Imagesdata("login")}
                  className="my-auto ht-xl-100p wd-md-100p wd-xl-100p mx-auto"
                  alt="logo"
                />
              </Col>
            </Row>
          </Col>
          <Col md={6} lg={6} xl={5} className="bg-white py-3">
            <div className="login d-flex align-items-center py-2 px-4">
              <Container className="p-0">
                <Row className="">
                  <Col md={10} lg={10} xl={11} className="mx-auto">
                    <div className="mb-5 d-flex">
                      <Link to="">
                        <img
                          src={Imagesdata("logo_testproject")}
                          className="sign-favicon-a ht-40"
                          alt="logo"
                        />
                      </Link>
                      {/* <h1 className="main-logo1 ms-1 me-0 my-auto tx-28">Va<span>le</span>x</h1> */}
                    </div>
                    <div className="main-card-signin d-md-flex">
                      <div className="wd-100p">
                        <div className="main-signin-header">
                          <h2>Forgot Password!</h2>
                          <h4>Please Enter Your Email</h4>
                          <Form action="#">
                            <Form.Group>
                              <Form.Label className="mb-3">Email</Form.Label>
                              <Form.Control
                                onChange={(e) => setEmail(e.target.value)}
                                className="mb-3"
                                placeholder="Enter your email"
                                type="text"
                              />
                            </Form.Group>

                              <Button
                                href="#"
                                id="send"
                                onClick={handleForgotPassword}
                                className="btn-main-primary btn-block"
                              >
                               {isLoading ? (
                                    // Show a spinner when loading is true
                                    <span>Sending <Spinner /></span>
                                  ) : (
                                    // Show the button text when not loading
                                    <span> Send</span>
                                  )}
                              </Button>
                          </Form>
                          {error && (
                            <small>
                              <div className="text-danger mt-3">
                                {error.message}
                              </div>
                            </small>
                          )}
                        </div>
                        <div className="main-signup-footer mg-t-20">
                          <p>
                            Forget it,{" "}
                            <Link to={`${import.meta.env.BASE_URL}signin`}>
                              {" "}
                              Send me back
                            </Link>{" "}
                            to the sign in screen.
                          </p>
                        </div>
                      </div>
                    </div>
                    {message && (
                      <div className="alert alert-success mt-5" role="alert">
                        {message.message}
                      </div>
                    )}
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

ForgotPassword.propTypes = {};

ForgotPassword.defaultProps = {};

export default ForgotPassword;
