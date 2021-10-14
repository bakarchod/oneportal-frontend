import React, { useState,useEffect } from 'react';
import '../dashboard.css';
import { API } from '../../../../API';
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
	const [faculty_data,setFaculty_data]=useState([]);
	const [subject_data,setSubject_data]=useState([]);
	const [refresh,setRefresh]=useState(true);
    const { id } = useParams()

	  useEffect(()=>{
		  (async()=>{
			  let DepartmentData;
			  try{
				//   get_department();
				  get_faculty();
				  get_subjects();
			  } catch(error){
				  console.log("useEffect Error")
				  console.log(error)
			  }
		  })();
	  },[refresh])
      
	  const get_faculty=()=>{
		  
		//   var token=
		//   console.log("Entered")
		//   console.log(token)
        console.log({id}.id)
		  Axios.get(`${API}/datamanager/get_faculty`,
		  	{headers:{
				  "Authorization" : "Token "+localStorage.getItem('Token')
				}
			}).then(response=>{
				setFaculty_data(response.data)
				console.log(response.data)
				
			}).catch(error=>{
				console.log(error)
			})
	  }
	  const get_subjects=()=>{
		  
		//   var token=
		//   console.log("Entered")
		//   console.log(token)
        console.log({id}.id)
		  Axios.get(`${API}/acads/get_subjects`,
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
	//   const handle = (e) =>{
	// 	this.setState({file:e.target.files[0]})
	//   }

	  const submit = (event) => {
		const formData = new FormData(event.currentTarget);
		event.preventDefault();
		console.log(formData.entries())

		Axios.post(`${API}/acads/add_new_subject`, formData,
			
			{
				headers:{
					"Authorization" : "Token "+localStorage.getItem('Token')
				}
			})
			.then(response=>{
            console.log(response)
			window.$('#addNewSubject').modal('hide');
			re_fresh();
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
								<h3 class="text-white text-center pt-2">Academic Section {id}</h3>
								<div className="row ">
								<button type="button" class="btn btn-outline-primary" onClick={re_fresh}>
									<i class="fas fa-redo"></i></button>
									<button className="btn btn-outline-warning ml-1" data-toggle="modal" data-target="#addNewSubject">Add New</button>
									<div class="modal fade" id="addNewSubject"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
										<div class="modal-dialog modal-lg" role="document">
											<div class="modal-content">
											<div class="modal-header">
												<h5 class="modal-title" id="exampleModalLabel">Add Subject</h5>
												<button type="button" class="close" data-dismiss="modal" aria-label="Close">
												<span aria-hidden="true">&times;</span>
												</button>
											</div>
											<form onSubmit={submit} enctype="multipart/form-data">
											<div class="modal-body text-dark">
											
											<div class="form-group row">
												<label for="staticEmail" class="col-sm-3 col-form-label">Subject Name</label>
												<div class="col-sm-9">
												<input type="text" name="name" class="form-control-plaintext" id="staticEmail" />
												</div>
											</div>
											
											<div class="form-group row">
												<label for="inputPassword" class="col-sm-3 col-form-label">Lesson Plan</label>
												<div class="col-sm-9">
												<input type="file" class="form-control" name="lesson_plan" id="inputPassword" placeholder="" />
												</div>
											</div>
											<div class="form-group row">
												<label for="inputPassword" class="col-sm-3 col-form-label">Faculty</label>
												<div class="col-sm-9">
												<select name="faculty"> 
													{
													faculty_data.map((faculty,index)=>(
														<option value={faculty.id} key={index}> {faculty.faculty_id.name} </option>
													))
												}
													</select>
												</div>
											</div>
											<div class="form-group row">
												<label for="inputPassword" class="col-sm-3 col-form-label">Credit</label>
												<div class="col-sm-9">
												<input type="text" class="form-control" name="credit" id="inputPassword" placeholder="Password" />
												</div>
											</div>
											<div class="form-group row">
												<label for="inputPassword" class="col-sm-3 col-form-label">semester</label>
												<div class="col-sm-9">
												<input type="text" class="form-control" name="semester" id="inputPassword" placeholder="Password" />
												</div>
											</div>
											
											</div>
											<div class="modal-footer">
												<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
												<button type="submit" class="btn btn-primary">Save changes</button>
											</div>
											</form>
											</div>
										</div>
										</div>
								</div>
							
								<div className="row justify-content-center p-1">
                                    
								{
									subject_data.map((subject,index)=>(
										<SubjectCards subjectData={subject} key={index} refresh={refresh} setRefresh={setRefresh} />
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
export default HodSubjects;