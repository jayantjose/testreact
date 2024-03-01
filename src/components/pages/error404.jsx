import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Error404 = () => {

	return (

		<div>
			<div className="main-error-wrapper page-h">
				<img src='src\assets\img\photos\2356439.jpg' className="error-page" alt="error" />
				<h2>Oopps. The page you were looking for doesn't exist.</h2>
				<h6>You may have mistyped the address or the page may have moved.</h6><Link className="btn btn-outline-danger" to='indexpage'>Back to Home</Link>
			</div>
		</div>
	)
};

Error404.propTypes = {};

Error404.defaultProps = {};

export default Error404;
