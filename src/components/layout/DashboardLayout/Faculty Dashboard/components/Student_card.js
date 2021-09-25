import React from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
import FacultyDashboard from '../FacultyDashboard';
import get_student from '../FacultyDashboard';
// import {refresh,setRefresh} from '../FacultyDashboard';

const Student_card=({studentData,refresh,setRefresh})=>{

    const del_std=(event,value)=>{
        event.preventDefault();
		console.log(studentData.id)
		// console.log(value)
		
        Axios.get("http://oneportal.pythonanywhere.com/admissions/delete/"+studentData.id,
		{
			headers:{"Authorization" : "Token "+localStorage.getItem('Token')
		  }
	  }).then(response=>{
		  console.log(response.msg)
		  setRefresh(!refresh)
		  toast("Deleted",{type:'error'})
		//   get_student()
		//   toast("Deleted",{type:'error'})
		 
	  }).catch(error=>{
		  console.log(error)
		  toast("Some Error occured!",{type:'error'})
	  })
		
    }

    const conf_std=(event)=>{
        event.preventDefault();
        toast("Confirmed",{type:'success',progress:'undefined'})
    }

return (<div className="card mb-2" >
	<div className="card-body">
    {/* <ToastContainer position="bottom-center"/> */}
		<div className="row">
			<div className="col-xl-10">
	  			<h5 className="card-title">Name: {studentData.name}</h5>
	  			<h6>Mob: +91 7999697546</h6>
				<h6>Opted for: B.Tech CSE</h6>
				<h6>Year: {studentData.id}</h6>
			</div>
			<div className="col">
	  			<a href="#" className="btn btn-outline-success h-30 btn-block mt-3 btn-lg" onClick={(event)=>conf_std(event)}>Confirm</a>
	  			<a href="#" className="btn btn-outline-danger h-30 btn-block mt-3 btn-lg" onClick={(event)=>del_std(event)}>Delete</a>
			</div>
		</div>
	</div>
</div>
)
}

export default Student_card;