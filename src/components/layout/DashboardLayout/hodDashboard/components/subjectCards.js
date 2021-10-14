import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';
// import {refresh,setRefresh} from '../FacultyDashboard';

const SubjectCards = ({ subjectData, refresh, setRefresh }) => {

	const ViewSubject = (event,value) => {
		
		window.location = "/hod/subject/"+subjectData.id
		
	}


	return (
		<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
			{/* <div className=" m-2 jumbotron">
			
			<h5 className="text-center text-dark">Name: {subjectData.subject_name}</h5>
			<h6 className="text-center text-dark">{subjectData.subject_code}</h6>
			<h6 className="text-center text-dark">{subjectData.credit}</h6>
            <h6 className="text-center text-dark">{subjectData.faculty.faculty_id.name}</h6>
			
            <h6 className="text-center text-dark">Year: {subjectData.id}</h6>
			
		</div> */}
			<div className="card card-common">
				<div className="theme-background mr-2 mt-1">

					<div className="card-body">
						<div className="justify-content-between">
							<i className="fas fa-university fa-1x text-warning"></i>

							<p className="text-center text-white text-uppercase">
								{subjectData.subject_name}
							</p>
							<div className="row">
								<div className="col-xl-6">
									<h6 className="text-center text-white">
										Taught By
									</h6>
									<p className="text-center text-white">{subjectData.faculty.faculty_id.name}</p>
								</div>
								<div className="col-xl-6">
									<h6 className="text-light text-center">Subject Code</h6>
									<p className="text-white text-center">{subjectData.subject_code}</p>

								</div>
							</div>
							<div style={{ borderTop: "1px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
							<hr />
							<div className="row ">
								<div className="col-xl-6">
									<h6 className="text-center text-white">
										Semester
									</h6>
									<p className="text-center text-white">6</p>
								</div>
								<div className="col-xl-6">
									<h6 className="text-light text-center ">Credit : </h6>
									<p className="text-white text-center">{subjectData.credit}</p>

								</div>
							</div>



						</div>
					</div>
					<div className="card-footer text-secondary">
						<div className="row justify-content-end align-items-center">
							<i className="fas fa-arrow-right text-white mr-2"></i>
							<span className='text-center '><button className="btn btn-default" type="button" onClick={ViewSubject} > View
							Details</button> </span>
						</div>
					</div>
				</div>
			</div>
		</div>
		// </div>
	)
}

export default SubjectCards;