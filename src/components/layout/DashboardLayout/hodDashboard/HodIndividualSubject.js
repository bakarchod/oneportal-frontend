import React, { useState,useEffect } from 'react';
import '../dashboard.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import $ from 'jquery'
// import Department_card from './components/Department_card';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import SubjectCards from './components/subjectCards';
import { useParams } from 'react-router-dom'
// import SubjectCards from './components/subjectCards';

const HodSubjects = (data) => {
	const [subject_data,setSubject_data]=useState([]);
	const [student_data,setStudent_data]=useState([]);
	const [refresh,setRefresh]=useState(true);
    const { id } = useParams()

	  useEffect(()=>{
		  (async()=>{
			  let DepartmentData;
			  try{
				  get_enrolled_students();
				  get_subject();
			  } catch(error){
				  console.log("useEffect Error")
				  console.log(error)
			  }
		  })();
	  },[refresh])

	  const get_enrolled_students=()=>{
		  
		//   var token=
		//   console.log("Entered")
		//   console.log(token)
        console.log({id}.id)
		  Axios.get("http://oneportal.pythonanywhere.com/acads/get_enrolled_students/"+id,
		  	{headers:{
				  "Authorization" : "Token "+localStorage.getItem('Token')
				}
			}).then(response=>{
				setStudent_data(response.data)
				console.log(response.data)
				
			}).catch(error=>{
				console.log(error)
			})
	  }
	  const trackSubject=()=>{
		window.location = "/hod/subject/"+id+"/track"
	  }
      
	  
	  const get_subject=()=>{
		  
		//   var token=
		//   console.log("Entered")
		//   console.log(token)
        console.log({id}.id)
		  Axios.get("http://oneportal.pythonanywhere.com/acads/get_subject/"+id,
		  	{headers:{
				  "Authorization" : "Token "+localStorage.getItem('Token')
				}
			}).then(response=>{
				setSubject_data(response.data)
				console.log(response.data)
				
			}).catch(error=>{
				console.log(error)
			})
	  }

	  const re_fresh=()=>{
		  setRefresh(!refresh)
	  }

    return (
        <div>	
			<Navbar></Navbar>
			<ToastContainer position="bottom-right"/>
			<section>
				<div className="container-fluid">
					<div className="row mb-5">
						<div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
							<div className="row align-items-center">
								<div className="col-xl-8 col-md-6 col-sm-6 p-1 ml-5">
									<div className="card card-common">
										<div className="card-body">
											<br />
											{/* {student_data} */}
											<table class="table table-dark table-responsive" >
												<thead>
													<tr>
														<th>#</th>
													<th scope="col">Name</th>
													<th scope="col">Subject</th>
													<th scope="col">email</th>
													<th scope="col">Phone</th>
													<th scope="col">Degree</th>
													</tr>
												</thead>
												<tbody id="studentTable">
													
												{
												student_data.map((param,index)=>(
													<tr key={index}>
														<th>1</th>
														<th scope="row">{param.lecture.subject_name}</th>
														<td>{param.student.name}</td>
														<td>{param.student.university_email_id}</td>
														<td>{param.student.phone}</td>
														<td>{param.student.program.name}</td>
														{/* <td>{param.student.program.name}</td> */}
													</tr>
													))
												}
												</tbody>
												</table>
											
											<nav>
												<ul className="pagination justify-content-center">
													<li className="page-item">
														<a href="#" className="page-link py-2 px-3">
															<span>&laquo;</span>
														</a>
													</li>
													<li className="page-item active">
														<a href="#" className="page-link py-2 px-3">
								1
								</a>
													</li>
													<li className="page-item">
														<a href="#" className="page-link py-2 px-3">
								2
								</a>
													</li>
													<li className="page-item">
														<a href="#" className="page-link py-2 px-3">
								3
								</a>
													</li>
													<li className="page-item">
														<a href="#" className="page-link py-2 px-3">
															<span>&raquo;</span>
														</a>
													</li>
												</ul>
											</nav>
										
										</div>
									</div>
								</div>
								
								<div className="col-xl-3 col-sm-6 p-1 ml-3">
									<div className="card card-common">
										<div className="card-body">
											<div className="d-flex justify-content-between">
												<i className="fas fa-university fa-1x text-warning"></i>
												<div className="jumbotron ">
													<p className="text-center text-secondary">
														
													</p>
													{/* <p className="text-dark text-right small">
														Taught By : {}
													</p>
													<p className="text-danger text-right small">Credit : 4</p> */}
													<Link to={`/hod/subject/${id}/track`}>
													<button type="button" className="btn btn-sm btn-outline-danger">Track Lecture</button></Link>

												</div>
											</div>
										</div>

										<div className="card-footer text-secondary">
											<i className="fas fa-arrow-right mr-3"></i>
											<small><a href="/media/16_k_bad.pdf" >Lesson plan</a></small>
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
export default HodSubjects;