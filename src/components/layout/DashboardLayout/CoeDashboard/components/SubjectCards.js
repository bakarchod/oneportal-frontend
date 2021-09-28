import React from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';
// import {refresh,setRefresh} from '../FacultyDashboard';

const Student_card=({subjectData,refresh,setRefresh})=>{


return (
	<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
		<div className=" m-2 jumbotron">
			{/* {JSON.stringify(subjectData)} */}
			<h5 className="text-center text-dark">Name: {subjectData.subject_name}</h5>
			<h6 className="text-center text-dark">{subjectData.subject_code}</h6>
			<h6 className="text-center text-dark">{subjectData.credit}</h6>
            <h6 className="text-center text-dark">{subjectData.faculty.faculty_id.name}</h6>
			{/* <a href={subjectData.lesson_plan}>{subjectData.lesson_plan}</a> */}
            <h6 className="text-center text-dark">Year: {subjectData.id}</h6>
			{/* <div className="text-center">
				<button className="btn btn-outline-success " onClick={(event)=>conf_std(event)}>Confirm</button>
				<button className="btn btn-outline-danger " onClick={(event)=>del_std(event)}>Delete</button>
			</div> */}
		</div>
			
		{/* </div> */}
	</div>
// </div>
)
}

export default Student_card;