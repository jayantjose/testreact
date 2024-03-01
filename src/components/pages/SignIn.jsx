import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { Imagesdata } from "../../common/commonimages";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenExists = localStorage.getItem('accessToken'); // Replace with your session check logic
    // Redirect to the dashboard if a session exists
    if (tokenExists) {
      navigate('/home');
    }
  }, [navigate]); // Add history as a dependency to avoid warnings

  useEffect(() => {
    const storedUsername = localStorage.getItem("rememberedEmail");
    const storedPassword = localStorage.getItem("rememberedPassword");
    const storedRememberMe = localStorage.getItem("rememberMe");
	  console.log(storedUsername)

    if (storedRememberMe) {
      setEmail(storedUsername || "");
	    setPassword(storedPassword || "");
      setRememberMe(true);
      
      // Attach the event listener to the document
      document.addEventListener('keydown', handleKeyPress);
      // Clean up the event listener when the component unmounts
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }
  }, [setEmail, setRememberMe]);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Call your login function or handle form submission here
      handleLogin();
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("/login", {
        email: email,
        password: password,
      });
      if (response.data.data.id > 0) {
        // If "Remember Me" is checked, store the username in local storage
        if (rememberMe) {
          localStorage.setItem("rememberedEmail", email);
          localStorage.setItem("rememberedPassword", password);
          localStorage.setItem("rememberMe", true);
        } else {
          localStorage.removeItem("rememberedEmail");
          localStorage.removeItem("rememberedPassword");
          localStorage.removeItem("rememberMe");
        }
        localStorage.setItem('accessToken', response.data.data.token);
        // Handle successful login, e.g., store token in state or local storage
        navigate("/home");
        console.log("Login successful", response.data);
      } else {
        setError(response.data)
        // Handle failed login, e.g., display an error message
        console.error("Login failed", response.data);
      }
    } catch (error) {
      console.error("Error during login", error);
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
            <div className="login d-flex align-items-center py-3 px-4">
              <Container className="p-0">
                <Row>
                  <Col md={10} lg={10} xl={10} className="mx-auto">
                    <div className="card-sigin">
                      <div className="mb-5 d-flex">
                        <Link to="">
                          <img
                            src={Imagesdata("logo_testproject")}
                            className="sign-favicon-a ht-50 "
                            alt="logo"
                          />
                          <img
                            src="favicon"
                            className="sign-favicon-b ht-40"
                            alt="logo"
                          />
                        </Link>
                        {/* <h1 className="main-logo1 ms-1 me-0 my-auto tx-28">Va<span>le</span>x</h1> */}
                      </div>
                      <div className="card-sigin">
                        <div className="main-signup-header">
                          <h2>Welcome back!</h2>
                          <h5 className="fw-semibold mb-4">
                            Please sign in to continue.
                          </h5>
                          <Form action="#">
                            <Form.Group>
                              <Form.Label className="mb-2">Email</Form.Label>
                              <Form.Control
							                  autoFocus 
								                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={(e) => handleKeyPress(e, emailRef)}
                                className="mb-3"
                                placeholder="Enter your email"
                                type="text"
                                required
                              />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label className="mb-2">Password</Form.Label>
                              <Form.Control
							                  value={ password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={(e) => handleKeyPress(e, passwordRef)}
                                className="mb-3"
                                placeholder="Enter your password"
                                type="password"
                                required
                              />
                            </Form.Group>
                            <Button
                              as={Link}
                              onClick={handleLogin}
                              className="btn-main-primary btn-block"
                            >
                              Sign In
                            </Button>
                          </Form>
                          {error && <small><div className="text-danger mt-3">{error.message}</div></small>}
                          <div className="col-12 d-flex main-signin-footer justify-content-between mt-4">
                            <div className="float-left d-flex">
                              <p>
                                <input
                                  type="checkbox"
                                  id="rememberMe"
                                  checked={rememberMe}
                                  onChange={() => setRememberMe(!rememberMe)}
                                />
                                <label htmlFor="rememberMe" className="ps-2 "> Remember me </label>
                              </p>
                            </div>
                            <div className="float-right">
                            
                              <p>
                                <Link to={`${import.meta.env.BASE_URL}forgot-password`}>
                                  Forgot password?
                                </Link>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

SignIn.propTypes = {};

SignIn.defaultProps = {};

export default SignIn;
