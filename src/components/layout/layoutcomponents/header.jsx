import React, { useEffect, useState } from 'react';
import { Dropdown, InputGroup, ListGroup, Nav, Navbar, Form } from 'react-bootstrap';
import { Scrollbar } from 'react-scrollbars-custom';
import { MENUITEMS } from "../../../common/sidebarmenu";
import { Link, useLocation } from 'react-router-dom';
import ProfileService from '../../../common/service/profile';
import EditProfileService from '../../../common/service/edit-profile';
import { Imagesdata } from '../../../common/commonimages';
import * as SwitcherData from '../../../common/switcherdata';
import { Logout } from '@mui/icons-material';

//leftsidemenu
const SideMenuIcon = () => {
	document.querySelector(".app")?.classList.toggle("sidenav-toggled");
}

// Darkmode

const DarkMode = () => {

	if (document.querySelector("body")?.classList.contains('dark-theme')) {
	  document.querySelector("body")?.classList.remove('dark-theme');

	  localStorage.setItem("valexlighttheme" , "true");
	  localStorage.removeItem("valexdark");
  
	  let myonoffswitch1 = document.querySelector("#myonoffswitch1");
	  myonoffswitch1.checked = true;
	  let myonoffswitch3 = document.querySelector("#myonoffswitch3");
	  myonoffswitch3.checked = true;
	  let myonoffswitch6 = document.querySelector("#myonoffswitch6");
	  myonoffswitch6.checked = true;
	}
	else {
	  document.querySelector("body")?.classList.add('dark-theme');
	  localStorage.setItem("valexdark" , "true");
	  localStorage.removeItem("valexlighttheme");
	  let myonoffswitch2 = document.querySelector("#myonoffswitch2");
	  myonoffswitch2.checked = true;
	  let myonoffswitch5 = document.querySelector("#myonoffswitch5");
	  myonoffswitch5.checked = true;
	  let myonoffswitch8 = document.querySelector("#myonoffswitch8");
	  myonoffswitch8.checked = true;
	}
  };

// FullScreen
function Fullscreen() {
	if (
		(document.fullScreenElement && document.fullScreenElement === null) ||
		(!document.mozFullScreen && !document.webkitIsFullScreen)
	) {
		if (document.documentElement.requestFullScreen) {
			document.documentElement.requestFullScreen();
		} else if (document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
		} else if (document.documentElement.webkitRequestFullScreen) {
			document.documentElement.webkitRequestFullScreen(
				Element.ALLOW_KEYBOARD_INPUT
			);
		}
	} else {
		if (document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	}
}

//rightsidebar
const RightSideBar = () => {
	document.querySelector(".sidebar-right").classList.toggle("sidebar-open");
}

// SwitcherMenu	
const SwitcherIcon = () => {
	document.querySelector(".demo_changer").classList.toggle("active");
	document.querySelector(".demo_changer").style.right = "0px";

}
//Header collapse search_bar
const Searchbar = () => {
	document.querySelector(".navbar-form")?.classList.toggle('active');
}

const Header = () => {
	let location = useLocation();

	const [faces6, setImage] = useState();
	const [outPut, setoutPut] = useState(EditProfileService.returnId());
	const [show1, setShow1] = useState(false);
	const [InputValue, setInputValue] = useState("");
	const [show2, setShow2] = useState(false);
	const [searchcolor, setsearchcolor] = useState("text-dark");
	const [searchval, setsearchval] = useState("Type something");
	const [NavData, setNavData] = useState([]);


	// useEffect(() => {
    //     const fetchDataAndSetState = async () => {
    //         await EditProfileService.initialize();
    //         setoutPut(EditProfileService.returnId());
    //     };

    //     fetchDataAndSetState();
    // }, []);

	const handleLogout = () => {
		// Perform any additional logout logic
	  
		// Clear all items from localStorage
		localStorage.clear();
	  
		// Redirect to the login page or perform other actions
	  };

	let myfunction = (inputvalue) => {
		document.querySelector(".search-result")?.classList.remove("d-none")

		let i = []
		let allElement2 = [];

		MENUITEMS.map(mainlevel => {
			if (mainlevel.Items) {
				setShow1(true)
				mainlevel.Items.map(sublevel => {
					if (sublevel.children) {
						sublevel.children.map(sublevel1 => {
							i.push(sublevel1)
							if (sublevel1.children) {
								sublevel1.children.map(sublevel2 => {
									i.push(sublevel2)
									return sublevel2;
								})
							}
							return sublevel1;
						})
					}
					return sublevel;
				})
			}
			return mainlevel;
		}
		)
		for (let allElement of i) {
			if (allElement.title.toLowerCase().includes(inputvalue.toLowerCase())) {
				if (allElement.title.toLowerCase().startsWith(inputvalue.toLowerCase())) {
					setShow2(true)
					allElement2.push(allElement)
				}
			}
		}
		if (!allElement2.length || inputvalue === "") {
			if (inputvalue === "") {
				setShow2(false);
				setsearchval("Type something")
				setsearchcolor('text-dark')
			}
			if (!allElement2.length) {
				setShow2(false);
				setsearchcolor('text-danger')
				setsearchval("There is no component with this name")
			}
		}
		setNavData(allElement2)

	}

	useEffect(() => {
		// console.log(ProfileService.returnImage())
		if (ProfileService.returnImage() != undefined) {
			setImage(ProfileService.returnImage())
		}
		setoutPut(EditProfileService.returnId())
	}, [location])

	useEffect(() => {
		SwitcherData.localStorageBackUp();
	
	  })
	return (
		<div>
			<Navbar className="main-header side-header sticky nav nav-item">
				<div className="container-fluid main-container">
					<div className="main-header-left ">
						<div className="responsive-logo">
							<Link to={`${import.meta.env.BASE_URL}home`} className="header-logo">
								<img src={Imagesdata("logo")} className="logo-1" alt="logo" />
								<img src={Imagesdata("logoWhite")} className="dark-logo-1" alt="logo" />
							</Link>
						</div>
						<div className="app-sidebar__toggle" data-bs-toggle="sidebar" onClick={() => SideMenuIcon()}>
							<Link className="open-toggle" to="#"><i className="header-icon fe fe-align-left" ></i></Link>
							<Link className="close-toggle" to="#"><i className="header-icons fe fe-x"></i></Link>
						</div>
						<div className="main-header-center ms-3 d-sm-none d-md-none d-lg-block">
							<input className="form-control" placeholder="Search for anything..." type="search" value={InputValue} onChange={(ele => { myfunction(ele.target.value); setInputValue(ele.target.value) })} /> <button className="btn"><i className="fas fa-search d-none d-md-block"></i></button>
						</div>
						{show1 ?
							<div className="card search-result p-absolute w-40 search-fix  border mt-1">
								<div className="card-header pb-0">
									<h4 className="card-title mb-0 me-2 text-break">Search result of {InputValue}</h4>
								</div>
								<ListGroup className='p-3'>
									{show2 ?
										NavData.map((e) =>
											<ListGroup.Item key={Math.random()} className="">
												<Link to={`${e.path}/`} className='search-result-item' onClick={() => { setShow1(false), setInputValue("") }}>{e.title}</Link>
											</ListGroup.Item>
										)
										: <b className={`${searchcolor} `}>{searchval}</b>}
								</ListGroup>

							</div>
							: ""}

					</div>

					<div className="main-header-right">
						<Navbar.Toggle className="navresponsive-toggler d-lg-none ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon fe fe-more-vertical "></span>
						</Navbar.Toggle>
						<div className="mb-0 navbar navbar-expand-lg navbar-nav-right responsive-navbar navbar-dark p-0">
							<Navbar.Collapse className="collapse navbar-collapse" id="navbarSupportedContent-4">
								<Nav className="nav-item navbar-nav-right ms-auto">
									
									<Nav.Item className="dropdown nav-item main-layout" onClick={() => DarkMode()}>
										<Nav.Link className="new nav-link theme-layout nav-link-bg layout-setting" >
											<span className="dark-layout"><svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" width="24" height="24" viewBox="0 0 24 24"><path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z" /></svg></span>
											<span className="light-layout"><svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs" width="24" height="24" viewBox="0 0 24 24"><path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z" /></svg></span>
										</Nav.Link>
									</Nav.Item>
									<li className="nav-link search-icon d-lg-none d-block">
										<Form className="navbar-form" role="search" onClick={() => Searchbar()}>
											<InputGroup>
												<input type="text" className="form-control" placeholder="Search" />
												<span className="input-group-btn">
													<button type="reset" className="btn btn-default">
														<i className="fas fa-times"></i>
													</button>
													<button type='button' className="btn btn-default nav-link resp-btn">
														<svg xmlns="http://www.w3.org/2000/svg" height="24px" className="header-icon-svgs" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
													</button>
												</span>
											</InputGroup>
										</Form>
									</li>
									
									
									<Nav.Item className="nav-item full-screen fullscreen-button">
										<Nav.Link className="new nav-link full-screen-link" onClick={() => Fullscreen()}>
											<svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs feather feather-maximize" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
										</Nav.Link>
									</Nav.Item>
									<Dropdown className="main-profile-menu nav nav-item nav-link">
										<Dropdown.Toggle as='a' className="profile-user d-flex" variant='' ><img src={outPut.lastName} alt="" /> </Dropdown.Toggle>
										<Dropdown.Menu className='profile-menu'>
											<div className="main-header-profile bg-primary p-3">
												<div className="d-flex wd-100p">
													<div className="main-img-user"><img src={outPut.lastName} className="" alt="" /></div>
													<div className="ms-3 my-auto">
														<h6>{outPut.firstName == undefined ? "Petey" : outPut.firstName} </h6>
														<span>{outPut.role}</span>
													</div>
												</div>
											</div>
											<Link className="dropdown-item" to={`${import.meta.env.BASE_URL}edit-profile`}><i className="bx bx-cog"></i> Edit Profile</Link>
											<Link className="dropdown-item" to={`${import.meta.env.BASE_URL}`} onClick={handleLogout}><i className="bx bx-log-out"></i> Sign Out</Link>
										</Dropdown.Menu>
									</Dropdown>
									
								</Nav>
							</Navbar.Collapse>
						</div>
						{/* <div className="d-flex">
							<Link className="demo-icon new nav-link" to="#" onClick={() => SwitcherIcon()}>
								<svg xmlns="http://www.w3.org/2000/svg" className="header-icon-svgs fa-spin" width="24" height="24" viewBox="0 0 24 24"><path d="M12 16c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.084 0 2 .916 2 2s-.916 2-2 2-2-.916-2-2 .916-2 2-2z" /><path d="m2.845 16.136 1 1.73c.531.917 1.809 1.261 2.73.73l.529-.306A8.1 8.1 0 0 0 9 19.402V20c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-.598a8.132 8.132 0 0 0 1.896-1.111l.529.306c.923.53 2.198.188 2.731-.731l.999-1.729a2.001 2.001 0 0 0-.731-2.732l-.505-.292a7.718 7.718 0 0 0 0-2.224l.505-.292a2.002 2.002 0 0 0 .731-2.732l-.999-1.729c-.531-.92-1.808-1.265-2.731-.732l-.529.306A8.1 8.1 0 0 0 15 4.598V4c0-1.103-.897-2-2-2h-2c-1.103 0-2 .897-2 2v.598a8.132 8.132 0 0 0-1.896 1.111l-.529-.306c-.924-.531-2.2-.187-2.731.732l-.999 1.729a2.001 2.001 0 0 0 .731 2.732l.505.292a7.683 7.683 0 0 0 0 2.223l-.505.292a2.003 2.003 0 0 0-.731 2.733zm3.326-2.758A5.703 5.703 0 0 1 6 12c0-.462.058-.926.17-1.378a.999.999 0 0 0-.47-1.108l-1.123-.65.998-1.729 1.145.662a.997.997 0 0 0 1.188-.142 6.071 6.071 0 0 1 2.384-1.399A1 1 0 0 0 11 5.3V4h2v1.3a1 1 0 0 0 .708.956 6.083 6.083 0 0 1 2.384 1.399.999.999 0 0 0 1.188.142l1.144-.661 1 1.729-1.124.649a1 1 0 0 0-.47 1.108c.112.452.17.916.17 1.378 0 .461-.058.925-.171 1.378a1 1 0 0 0 .471 1.108l1.123.649-.998 1.729-1.145-.661a.996.996 0 0 0-1.188.142 6.071 6.071 0 0 1-2.384 1.399A1 1 0 0 0 13 18.7l.002 1.3H11v-1.3a1 1 0 0 0-.708-.956 6.083 6.083 0 0 1-2.384-1.399.992.992 0 0 0-1.188-.141l-1.144.662-1-1.729 1.124-.651a1 1 0 0 0 .471-1.108z" /></svg>
							</Link>
						</div> */}
					</div>
				</div>
			</Navbar>
		</div>)
}
	;

Header.defaultProps = {};

export default Header;
