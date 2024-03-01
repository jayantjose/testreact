import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
// Create a new Date object
const currentDate = new Date();

// Get the current year
const currentYear = currentDate.getFullYear();
  return(
  <div className="">
    <div className="main-footer">
      <div className="container-fluid pd-t-0 ht-100p">
        <span> Copyright © {currentYear} <Link to="https://testcompany.co.uk/" className="text-primary">Test Technologies</Link> All rights reserved.</span>
      </div>
    </div>
  </div>
);
  }


Footer.defaultProps = {};

export default Footer;
