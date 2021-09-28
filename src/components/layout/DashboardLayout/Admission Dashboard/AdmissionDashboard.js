import React, { useState,useEffect } from 'react';
import '../dashboard.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Student_card from './components/Student_card';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';

const FacultyDashboard = (data) => {
	
    return (
        <div>	
			<Navbar></Navbar>
			<ToastContainer position="bottom-right"/>
		<section>
        	<div className="container-fluid">
				<div className="row col-xl-10 col-lg-9 col-md-8 ml-auto">
					<div className="col-6 col-xl-10 col-lg-9 col-md-8 ">
							<div className="row">
								<div className="col-6 col-xl-10 col-lg-9 col-md-8">
									<h1>Dashboard</h1>
								</div>
								<div className="col">
									<h1>Welcome</h1>
								</div>
							</div>
						
    			    	<div className="col">
    			        </div>
					</div>
				</div>
    		</div>
    	</section>
    	</div>
    );
}
export default FacultyDashboard;