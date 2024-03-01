import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import axios from '../../api/axios';

const EditProfile = () => {
	
	const [name ,setName] = useState('');
	const [email ,setEmail] = useState('');
	const [mobile ,setMobile] = useState('');
	const [currentPassword,setCurrentPassword] = useState("");
	const [password,setPassword] = useState("");
	const [confirmPassword,setConfirmPassword] = useState("");
	const [selectedFile, setSelectedFile] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files.file[0]);
  };

  
  
//   const slectimage = selectedFile.name;
//   console.log(slectimage);
	useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('accessToken');
                const axiosConfig = {
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                };

                const response = await axios.post("/user-details", {}, axiosConfig);

                if (response.data) {
                    console.log("update details", response.data.data);
                    setName(response.data.data.name);
                    setEmail(response.data.data.email);
                    setMobile(response.data.data.mobile);
                    setPassword(response.data.data.password);
                } else {
                    console.log('failed', response.data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); // Call the async function
    }, []);

	
    const handleUpdateProfile = async () => {
      const updatedDetails = {
        name: name,
        email: email,
        mobile: mobile,
		current_password :currentPassword,
		password :password,
		password_confirmation :confirmPassword,
		profile_photo:selectedFile,

      };
	  const token = localStorage.getItem('accessToken');
                const axiosConfig = {
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                };

      axios
        .post("/user-profile-update", updatedDetails,axiosConfig)
        .then((response) => {
          console.log("Update successful:", response.data);
          // Handle success, e.g., show a success message to the user
        })
        .catch((error) => {
          console.error("Update failed:", error);
          // Handle error, e.g., show an error message to the user
        });
    };


	return (



		<div>
			{/* <Pageheader titles="Pages" active="Edit-Profile" /> */}
			<Row className="row-sm mt-5">
				
				<Col lg={12} xl={12}>
					<Card>
						<Card.Body>
							<div className="mb-4 main-content-label">Personal Information</div>
							<Form className="form-horizontal">
								
								<div className="mb-4 main-content-label">Name</div>
								<Form.Group>
									<Row>
										<Col md={3}>
											<Form.Label>Name</Form.Label>
										</Col>
										<Col md={9}>
											<Form.Control type="text" placeholder="User Name" value={name} onChange={(e) => setName(e.target.value)}  />
										</Col>
									</Row>
								</Form.Group>
								
								
									
								
								<div className="mb-4 main-content-label mt-3"></div>
								<Form.Group>
									<Row>
										<Col md={3}>
											<Form.Label>Email<i>(required)</i></Form.Label>
										</Col>
										<Col md={9}>
											<Form.Control type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  />
										</Col>
									</Row>
								</Form.Group>
								
								<Form.Group>
									<Row className='mt-3'>
										<Col md={3}>
											<Form.Label>Phone</Form.Label>
										</Col>
										<Col md={9}>
											<Form.Control type="text" placeholder="phone number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
										</Col>
									</Row>
								</Form.Group>

								<Form.Group>
									<Row className='mt-3'>
										<Col md={3}>
											<Form.Label>Current Password</Form.Label>
										</Col>
										<Col md={9}>
											<Form.Control type="password" placeholder="Current Password" onChange={(e) => setCurrentPassword(e.target.value)}  />
										</Col>
									</Row>
								</Form.Group>

								<Form.Group>
									<Row className='mt-3'>
										<Col md={3}>
											<Form.Label>Password</Form.Label>
										</Col>
										<Col md={9}>
											<Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}  />
										</Col>
									</Row>
								</Form.Group>

								<Form.Group>
									<Row className='mt-3'>
										<Col md={3}>
											<Form.Label>Confirm Password</Form.Label>
										</Col>
										<Col md={9}>
											<Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}  />
										</Col>
									</Row>
								</Form.Group>
								<div>
								<input type="file" onChange={handleFileChange} />
								{/* <button onClick={handleUpload}>Upload Image</button> */}
								</div>
								
							</Form>
						</Card.Body>
						<Card.Footer>
							<Button variant='primary' onClick={handleUpdateProfile} className="waves-effect waves-light">Update Profile</Button>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		</div>
	)
};

EditProfile.propTypes = {};

EditProfile.defaultProps = {};

export default EditProfile;
