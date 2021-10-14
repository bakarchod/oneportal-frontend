import React, { useState,useEffect } from 'react';
import '../dashboard.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { API } from '../../../../API';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/NavbarCoeAcademics';
import SubjectCards from './components/SubjectCards';
import { useParams } from 'react-router-dom'

const CoeDepartments = (data) => {
	const [subject_data,setSubject_data]=useState([]);
    const [student_data,setStudent_data]=useState([]);
	const [refresh,setRefresh]=useState(true);
    const { id } = useParams()

	  useEffect(()=>{
		  (async()=>{
			  let DepartmentData;
			  try{
				  get_subjects();
                  get_student();
			  } catch(error){
				  console.log("useEffect Error")
				  console.log(error)
			  }
		  })();
	  },[refresh])
	const get_student=()=>{
		  
		//   var token=
		//   console.log("Entered")
		//   console.log(token)
        console.log({id}.id)
		  Axios.get(`${API}/coe/departments/"${id}/students`,
		  	{headers:{
				  "Authorization" : "Token "+localStorage.getItem('Token')
				}
			}).then(response=>{
				setStudent_data(response.data)
				console.log(student_data)
			}).catch(error=>{
				console.log(error)
			})
	  }

      const get_subjects=()=>{
		  
		//   var token=
		//   console.log("Entered")
		//   console.log(token)
        console.log({id}.id)

		  Axios.get(`${API}/coe/departments/${id}/subjects`,
		  	{headers:{
				  "Authorization" : "Token "+localStorage.getItem('Token')
				}
			}).then(response=>{
				setSubject_data(response.data)
				console.log(subject_data)
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
			<div className="col-xl-10 col-lg-10 col-md-8 ml-auto">
				<div className="row justify-content-center">
					<div className="col-xl-12 col-lg-12 col-md-12 ml-auto">
						<div className="card p-4">
							<div class="card card-common"> 
								<h3 class="text-white text-center pt-2">Academic Section {id}</h3>
								<button type="button" class="btn btn-outline-primary ml-auto" onClick={re_fresh}>
									<i class="fas fa-redo"></i></button>
								<div className="row justify-content-center p-1">
                                    
								
								{
									subject_data.map((subject,index)=>(
										<SubjectCards departmentData={subject} key={index} refresh={refresh} setRefresh={setRefresh}/>
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
export default CoeDepartments;