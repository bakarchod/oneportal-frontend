import React from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
// import {refresh,setRefresh} from '../FacultyDashboard';

const Department_card=({departmentData,refresh,setRefresh})=>{


    const open=(event)=>{
        window.location = '/coe/departments/'+departmentData.id
    }
	const ViewSubject = (event,value) => {
		
		window.location = "/coe/departments/"+departmentData.id+"/subjects"
		
	}

return (
	
		

		<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
			{/* <div className=" m-2 jumbotron">
			
			<h5 className="text-center text-dark">Name: {departmentData.subject_name}</h5>
			<h6 className="text-center text-dark">{departmentData.subject_code}</h6>
			<h6 className="text-center text-dark">{departmentData.credit}</h6>
            <h6 className="text-center text-dark">{departmentData.faculty.faculty_id.name}</h6>
			
            <h6 className="text-center text-dark">Year: {departmentData.id}</h6>
			
		</div> */}
			<div className="card card-common">
				<div className="theme-background mr-2 mt-1">

					<div className="card-body">
						<div className="justify-content-between">
							<i className="fas fa-university fa-1x text-warning"></i>

							<p className="text-center text-white text-uppercase">
								{departmentData.department_name}
							</p>
							<div className="row">
								<div className="col-xl-6">
									<h6 className="text-center text-white">
										head of department
									</h6>
									<p className="text-center text-white">{departmentData.head_of_department.name}</p>
								</div>
								<div className="col-xl-6">
									<h6 className="text-light text-center">Department Code</h6>
									<p className="text-white text-center">{departmentData.department_code}</p>

								</div>
							</div>
							<div style={{ borderTop: "1px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
							<hr />
							<div className="row ">
								<div className="col-xl-6">
									<h6 className="text-center text-white">
										School
									</h6>
									<p className="text-center text-white">{departmentData.school.name}</p>
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
);
}

export default Department_card;