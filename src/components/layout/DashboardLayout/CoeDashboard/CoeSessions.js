import React, { useState,useEffect } from 'react';
import '../dashboard.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { API } from '../../../../API';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/NavbarCoeAcademics';
import CoeDashboard from './CoeDashboard';
import SessionCard from './components/SessionCard';

const CoeSessions = (data) => {
	const [session_data,setSession_data]=useState([]);
	const [refresh,setRefresh]=useState(true);
	// const [values, setValues] = useState({
    //     session_name : "",
    //     valid_till: "",
	// 	status : false
    // });

	  useEffect(()=>{
		  (async()=>{
			  let sessionData;
			  try{
				  get_sessions();
			  } catch(error){
				  console.log("useEffect Error")
				  console.log(error)
			  }
		  })();
	  },[refresh])
	const get_sessions=()=>{
		  
		//   var token=
		//   console.log("Entered")
		//   console.log(token)
		  Axios.get(`${API}/coe/get_sessions`,
		  	{headers:{
				  "Authorization" : "Token "+localStorage.getItem('Token')
				}
			}).then(response=>{
				setSession_data(response.data)
				console.log(session_data)
			}).catch(error=>{
				console.log(error)
			})
	  }

	  const re_fresh=()=>{
		  setRefresh(!refresh)
	  }

	//   const {email,password} = values;
  
	  const submit = (event) => {
		const formData = new FormData(event.currentTarget);
		event.preventDefault();
		var obj = {}
		for (let [key, value] of formData.entries()) {
			obj[key] = value;
		}
		console.log(obj);
		Axios.post(`${API}/coe/create_session`,
			(obj),
			{headers:{"Authorization" : "Token "+localStorage.getItem('Token')}}).then(response=>{
            console.log(response);
			setRefresh(!refresh);
        }).catch(error=>{
                console.log(error)
        })
		
	  };

	  

    return (
        <div>	
			<Navbar></Navbar>
			<ToastContainer position="bottom-right"/>
    <section>
		
        <div className="container-fluid">
			<div className="col-xl-10 col-lg-10 col-md-8 ml-auto">
				<div className="row justify-content-center">
					<div className="col-xl-12 col-lg-12 col-md-12 ml-auto">
						<div className="card p-4">
							<div class="card card-common"> 
								<h3 class="text-white text-center pt-2">Academic Sessions</h3>
                                <div className="row ml-auto">
										<button type="button" class="btn btn-outline-primary m-3" onClick={re_fresh}>
										<i class="fas fa-redo"></i></button>
									
										<button type="button" class="btn btn-outline-primary m-3" data-toggle="modal" data-target="#exampleModalCenter" onClick={re_fresh}>New Session 
										<i class="fas fa-plus"></i></button>
									
										<form onSubmit={submit}>
											<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
											<div class="modal-dialog modal-dialog-centered" role="document">
												<div class="modal-content">
												<div class="modal-header">
													<h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
													<button type="button" class="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div class="modal-body">
												<div className="form-row">
														<input type="text" className="form-control my-xl-3 my-3 p-3" id="session_name" name="session_name" required placeholder="session_name" />

													</div>
													<div className="form-row">
														<input type="date" className="form-control my-xl-3 my-3 p-3" id="valid_till" name="valid_till" required placeholder="Valid Till" />
													</div>
													<div className="form-row">
														<input type="checkbox"  className="form-control my-xl-3 my-3 p-3" id="status" name="status" required placeholder="Status" /> <label>status</label>
													</div>
					
												</div>
												<div class="modal-footer">
													<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
													<button type="submit" class="btn btn-primary btn1">Save changes</button>
												</div>
												</div>
											</div>
											</div>
										</form>
										
									
								</div>
								
								<div className="row justify-content-center p-1">
								
								{
									session_data.map((session,index)=>(
										<SessionCard sessionData={session} key={index} refresh={refresh} setRefresh={setRefresh}/>
									))
								}
								</div>	
							</div>
						</div>
					</div>
				</div>
            </div>
        </div>
    </section>
    </div>
    );

}
export default CoeSessions;