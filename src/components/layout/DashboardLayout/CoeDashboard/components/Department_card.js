import React from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
// import {refresh,setRefresh} from '../FacultyDashboard';

const Student_card=({departmentData,refresh,setRefresh})=>{

    const del_std=(event,value)=>{
        event.preventDefault();
		console.log(departmentData.id)
		// console.log(value)
		
        Axios.get("http://oneportal.pythonanywhere.com/admissions/delete/"+departmentData.id,
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

    const open=(event)=>{
    //     Axios.get("http://oneportal.pythonanywhere.com/admissions/delete/"+departmentData.id,
	// 	{
	// 		headers:{"Authorization" : "Token "+localStorage.getItem('Token')
	// 	  }
	//   }).then(response=>{
	// 	  console.log(response.msg)
	// 	  setRefresh(!refresh)
	// 	  toast("Deleted",{type:'error'})
	// 	//   get_student()
	// 	//   toast("Deleted",{type:'error'})
		 
	//   }).catch(error=>{
	// 	  console.log(error)
	// 	  toast("Some Error occured!",{type:'error'})
	//   })
        window.location = '/coe/departments/'+departmentData.id
    }

return (
	<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
		<div className=" m-2 jumbotron">
			
			<h5 className="text-center text-dark font-weight-bold"> {departmentData.department_name}( {departmentData.department_code})</h5>
			<h6 className="text-center text-dark">Head: {departmentData.head_of_department}</h6>
			<h6 className="text-center text-dark"></h6>
			<h6 className="text-center text-dark"></h6>
			<div className="text-center">
				<button className="btn btn-outline-success " onClick={(event)=>open(event)}>Open</button>
				{/* <button className="btn btn-outline-danger " onClick={(event)=>del_std(event)}>Delete</button> */}
			</div>
		</div>
			
		{/* </div> */}
	</div>
// </div>
)
}

export default Student_card;