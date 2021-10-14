// import React, { useState,useEffect } from 'react';
import '../../dashboard.css';
import { Link } from 'react-router-dom';
// import Axios from 'axios';
// import Student_card from './components/Student_card';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = (data) => {
	
    return (
        <div>	
			<ToastContainer position="bottom-right"/>
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
                            <div className="bottom-border mt-3">
                                <div className="one-portal bottom-border">
                                    <h4 className="text-white text-uppercase text-center mb-3">One Portal</h4>
                                    {/* <h5 className="text-white text-uppercase text-center mb-3">Controller of Examination</h5> */}
                                </div>
                                <div className="info my-3 text-center">
                                   {/* <img src="images/logo.png" width="50" className="rounded-circle mr-3"  />  */}
                                    <Link to="#" className="text-white text-uppercase text-center">{localStorage.getItem('Name')}</Link>
                                    <p className="text-center text-white m-2">Controller of Examination </p>
                                </div>
                            </div>
                            <ul className="navbar-nav flex-column mt-4">
                                <li className="nav-item"><Link to="/coe/profile" className="nav-link text-white p-1 mb-2 sidebar-link"><small><i className="fas fa-home text-light fa-sm mr-3"></i>Dashboard</small></Link></li>
                                <li className="nav-item"><Link to="exam_server" className="nav-link text-white p-1 mb-2 sidebar-link"><small><i className="fas fa-user text-light fa-sm mr-3"></i>Exam Server</small></Link></li>
                                <li className="nav-item"><Link to="academics" className="nav-link text-white p-1 mb-2 sidebar-link"><small><i className="fas fa-envelope text-light fa-sm mr-3"></i>Academics</small></Link></li>
                                {/* <li className="nav-item"><Link to="/notice" className="nav-link text-white p-1 mb-2 sidebar-link"><small><i className="fas fa-shopping-cart text-light fa-sm mr-3"></i>Notice Board</small></Link></li>
                                <li className="nav-item"><Link to="#" className="nav-link text-white p-1 mb-2 sidebar-link"><small><i className="fas fa-chart-line text-light fa-sm mr-3"></i>Semster Marks</small></Link></li>
                                <li className="nav-item"><Link to="/calendar" className="nav-link text-white p-1 mb-2 sidebar-link"><small><i className="fas fa-chart-bar text-light fa-sm mr-3"></i> Calender</small></Link></li>*/}
                                {/* <li className="nav-item"><Link to="/student/dashboard" className="nav-link text-white p-1 mb-2 sidebar-link"><small><i className="fas fa-table text-light fa-sm mr-3"></i>Lecture Corner</small></Link></li>  */}

                                <li className="nav-item"><Link to="/auth/logout" className="nav-link text-white p-1 mb-2 sidebar-link"><small><i className="fas fa-wrench text-light fa-sm mr-3"></i>Logout</small></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    
    </div>
    );
}
export default Navbar;