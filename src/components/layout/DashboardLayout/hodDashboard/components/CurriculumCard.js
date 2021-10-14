import React,{ useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
import { API } from '../../../../../API';
import { Link } from 'react-router-dom';
// import {refresh,setRefresh} from '../FacultyDashboard';

const SubjectCards = ({ curriculumData, refresh, setRefresh }) => {
	const [faculty,setFaculty]=useState([]);
	const [batch,setBatch]=useState([]);
	const [curriculum,setCurriculum]=useState([]);
	const [flag,setFlag] = useState(false)

	// const ViewSubject = (event,value) => {
		
	// 	window.location = "/hod/subject/"+curriculumData.id
		
	// }
	useEffect(()=>{
        (async()=>{
            let notificationData;
            try{
                get_faculty();
				get_batch();
                get_curriculum_detail();
                
            } catch(error){
                console.log("useEffect Error")
                console.log(error)
            }
        })();
    },[refresh])

	const get_curriculum_detail=()=>{
		  
		//   var token=
		//   console.log("Entered")
		//   console.log(token)
		  Axios.get(`${API}/hod/get_curriculum_detail/${curriculumData.id}`,
		  	{headers:{
				  "Authorization" : "Token "+localStorage.getItem('Token')
				}
			}).then(response=>{
				setCurriculum(response.data);
				console.log("curr",response.data)
				if (Object.keys(curriculum).length == 0){
					setFlag(false)
				}
				else{
					setFlag(true)
				}
				// console.log("curr",rexsponse.data)
			}).catch(error=>{
				console.log('lkjhjk')
				console.log(error)
			})
	  }

	const get_faculty=()=>{
		  
		//   var token=
		//   console.log("Entered")
		//   console.log(token)
		  Axios.get(`${API}/hod/get_dept_faculty`,
		  	{headers:{
				  "Authorization" : "Token "+localStorage.getItem('Token')
				}
			}).then(response=>{
				setFaculty(response.data);
				console.log(response.data,faculty)
			}).catch(error=>{
				console.log(error)
			})
	  }

	  const get_batch=()=>{
		  
		//   var token=
		//   console.log("Entered")
		//   console.log(token)
		  Axios.get(`${API}/hod/get_batch`,
		  	{headers:{
				  "Authorization" : "Token "+localStorage.getItem('Token')
				}
			}).then(response=>{
				setBatch(response.data);
				console.log(response.data,faculty)
			}).catch(error=>{
				console.log(error)
			})
	  }

	  const submit = (event) => {
		const formData = new FormData(event.currentTarget);
		event.preventDefault();
		var obj = {}
		var obj2={}
		console.log(formData.entries())
		for (let [key, value] of formData.entries()) {
			obj[key] = value;
	  }
	  console.log(obj);
		Axios.post(`${API}/hod/assign_faculty_and_batch/`,
			(obj),
			{headers:{"Authorization" : "Token "+localStorage.getItem('Token')}}).then(response=>{
				window.$('#selectFaculty').modal('hide');
				toast(response.data.msg)
			console.log(response)
		}).catch(error=>{
				console.log(error)
		})
	}

	


	return (
		<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
			{/* <div className=" m-2 jumbotron">
			
			<h5 className="text-center text-dark">Name: {curriculumData.subject_name}</h5>
			<h6 className="text-center text-dark">{curriculumData.subject_code}</h6>
			<h6 className="text-center text-dark">{curriculumData.credit}</h6>
            <h6 className="text-center text-dark">{curriculumData.faculty.faculty_id.name}</h6>
			
            <h6 className="text-center text-dark">Year: {curriculumData.id}</h6>
			
		</div> */}
			<div className="card card-common">
				<div className="theme-background mt-1">

					<div className="card-body">
						<div className="justify-content-between">
							<i className="fas fa-university fa-1x text-warning"></i>

							<p className="text-center text-white text-uppercase">
								{curriculumData.name}
							</p>
							<div className="row">
								<div className="col-xl-6">
									<h6 className="text-center text-white">
										Department
									</h6>
									<p className="text-center text-white">{curriculumData.department.department_name}</p>
								</div>
								<div>
								{
									// console.log('lkj')
									curriculum.map((curr,index) => {
										<p>{curr.curriculum.name}</p>
									})
									
										// if(Object.keys(curriculum).length==0)?alert('gh'):alert('lk');
									
								}
								</div>
								<div className="col-xl-6">
									<h6 className="text-light text-center">Batch</h6>
									{/* <p className="text-white text-center">{curriculum.batch.name}</p> */}

								</div>
							</div>
							<div style={{ borderTop: "1px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
							<hr />
							<div className="row ">
								<div className="col-xl-6">
									<h6 className="text-center text-white">
										Curriculum
									</h6>
									<li className="text-center text-white">{curriculumData.subjects}</li>
								</div>
								<div className="col-xl-6">
									<h6 className="text-light text-center ">Credit : </h6>
									{/* <p className="text-white text-center">{curriculum.faculty}</p> */}
									{
									// console.log('lkj')
									curriculum.map((curr,index) => {
										<p className="text-white bold">{curr.id}</p>
										console.log(`${curr.id}`)
									})
									
										// if(Object.keys(curriculum).length==0)?alert('gh'):alert('lk');
									
								}

								</div>
							</div>



						</div>
					</div>
					<div className="card-footer text-secondary">
						<div className="row justify-content-end align-items-center">
							<i className="fas fa-arrow-right text-white mr-2"></i>
							<span className='text-center '><button className="btn btn-default" data-toggle="modal" data-target="#selectFaculty" type="button" > View
							Details</button> </span>
						
							
							<div class="modal fade" id="selectFaculty" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
							<div class="modal-dialog" role="document">
								<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<form onSubmit={submit}>

								<div class="modal-body">
									<label class="text-dark bold">Select Faculty</label>
									<select className="custom-select" name="faculty">
										{
											faculty.map((fac,index) => (
											<option value={fac.id}>{fac.faculty_id.name}</option>
											))
										}
										
									</select>

									<label class="text-dark bold">
										Select Batch
									</label>
									<select className="custom-select" name="batch">
										{
											batch.map((bat,index) => (
											<option value={bat.id}>{bat.name}</option>
											))
										}
										
									</select>
									<label class="text-dark bold">Valid Till</label>
									<input type="datetime-local" name="valid_till" className="form-control-date" />
									<input type="text" name="curriculum" value={curriculumData.id} hidden />
	
									
									
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
					</div>
				</div>
			</div>
		</div>
		// </div>
	)
}

export default SubjectCards;