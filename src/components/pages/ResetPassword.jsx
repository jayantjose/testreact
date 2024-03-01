import { React, Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from "../../api/axios";
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
import { Imagesdata } from "../../common/commonimages";


const ResetPassword = () => {

	const [token, setToken] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [password_confirmation, setPasswordConfirmation] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	useEffect(( ) => {
		const urlSearchString = window.location.search;
		const params = new URLSearchParams(urlSearchString);
		setToken(params.get('token'));
		setEmail(params.get('email'));
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
			document.getElementById('btn_reset_pwd').click();
		}
	};
	  
	const handleReset = async () => {
		try {
			setIsLoading(true);
			const response = await axios.post("/reset-password", {
				email: email,
				password: password,
				password_confirmation: password_confirmation,
				token: token,
			});
			console.log(response.data);
			if (response.data.status == 200) {
				toastr.success(response.data.message);
				console.log(response.data.message);
				// Redirect to the login page after successful reset
				navigate("/signin");
			} else {
				const errorMessages = response.data.errors.password.join('\n');
				toastr.error(errorMessages);
				console.error("Login failed", errorMessages);
			}
		} catch (error) {
		  console.error("Error during login", error);
		} finally {
			// Hide spinner and show button again
			setIsLoading(false);
		  }
	  };
	
	return (
		<div>
			<div className="" >
				<Row className="no-gutter">
				<Col
					md={6}
					lg={6}
					xl={7}
					className="d-none d-md-flex bg-primary-transparent p-0"
				>
					<Row className="wd-108p">
					<Col md={12} lg={12} xl={12} className="my-auto mx-auto wd-108p">
						<img
						src={Imagesdata("login")}
						className="my-auto ht-xl-100p wd-md-100p wd-xl-100p mx-auto"
						alt="logo"
						/>
					</Col>
					</Row>
				</Col>
					<Col md={6} lg={6} xl={5} className="bg-white py-4">
						<div className="login d-flex align-items-center py-2 px-4">
							<Container className="p-0">
								<Row>
									<Col md={10} lg={10} xl={9} className="mx-auto">
										<div className="mb-5 d-flex">
											<Link to=''>
												<img src={Imagesdata("logo_testproject")} className="sign-favicon-a ht-50 " alt="logo"/>
												<img src="favicon" className="sign-favicon-b ht-40" alt="logo" />
											</Link>
										</div>
										<div className="main-card-signin d-md-flex">
											<div className="wd-100p">
												<div className="main-signin-header">
													<div className="">
														<h2>Welcome back!</h2>
														<h4 className="text-start">Reset Your Password</h4>
														<Form>
															<Form.Group className="text-start">
																<Form.Label>Email</Form.Label>
																<Form.Control className="mb-3" value={email} placeholder="Enter your email" type="text"  onChange={(e) => setEmail(e.target.value)}/>
															</Form.Group>
															<Form.Group className="text-start">
																<Form.Label>New Password</Form.Label>
																<Form.Control className="mb-3" placeholder="Enter your password" type="password" value={ password} onChange={(e) => setPassword(e.target.value)}/>
															</Form.Group>
															<Form.Group className="text-start">
																<Form.Label>Confirm Password</Form.Label>
																<Form.Control className="mb-3" placeholder="Enter your password" type="password"  value={ password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
															</Form.Group>
															<Button href="#" id="btn_reset_pwd" onClick={handleReset} className="ripple btn-main-primary btn-block">
															{isLoading ? (
																// Show a spinner when loading is true
																<span>Submitting <Spinner /></span>
															) : (
																// Show the button text when not loading
																<span>Reset Password</span>
															)}</Button>
														</Form>
													</div>
												</div>
												<div className="main-signup-footer mg-t-20">
													<p>Already have an account? <Link to='/signin'>Sign In</Link></p>
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
	)
};

ResetPassword.propTypes = {};

ResetPassword.defaultProps = {};

export default ResetPassword;
