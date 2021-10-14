import React from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { API } from '../../../../../API';

const SessionCard=({sessionData,refresh,setRefresh})=>{
	const end_sesion=(event)=>{
		  
		//   var token=
		//   console.log("Entered")
		//   console.log(token)
		  Axios.get(`${API}/coe/end_session/${sessionData.id}`,
		  	{headers:{
				  "Authorization" : "Token "+localStorage.getItem('Token')
				}
			}).then(response=>{
				setRefresh(!refresh)
				// console.log(session_data)
			}).catch(error=>{
				console.log(error)
			})
	  }


return (
	<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
		<div className=" m-2 jumbotron">
			{/* {JSON.stringify(sessionData)} */}
			<h5 className="text-center text-dark">Name: {sessionData.session_name}</h5>
			<h6 className="text-center text-dark">{sessionData.start_date}</h6>
			<h6 className="text-center text-dark">{sessionData.end_date}</h6>
            <h6 className="text-center text-dark">{sessionData.status}</h6>
			{/* <a href={sessionData.lesson_plan}>{sessionData.lesson_plan}</a> */}
            <h6 className="text-center text-dark">Year: {sessionData.id}</h6>
			<div className="text-center">
				<button className="btn btn-outline-danger" onClick={(event)=>end_sesion(event)}>End Session</button>
				{/* <button className="btn btn-outline-danger " onClick={(event)=>del_std(event)}>Delete</button> */}
			</div>
		</div>
			
		{/* </div> */}
	</div>
// </div>
)
}

export default SessionCard;