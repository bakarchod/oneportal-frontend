import React, { useState,useEffect } from 'react';
import '../dashboard.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Department_card from './components/Department_card';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/NavbarCoeAcademics';
import { API } from '../../../../API';

const CoeAcademics = (data) => {
	const [department_data,setDepartment_data]=useState([]);
	const [refresh,setRefresh]=useState(true);

	  useEffect(()=>{
		  (async()=>{
			  let DepartmentData;
			  try{
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
		  Axios.get(`${API}/coe/coe_get_departments`,
		  	{headers:{
				  "Authorization" : "Token "+localStorage.getItem('Token')
				}
			}).then(response=>{
				console.log(response.data)
				setDepartment_data(response.data);
				console.log(department_data)
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
								<h3 class="text-white text-center pt-2">Academic Section</h3>
								<button type="button" class="btn btn-outline-primary ml-auto" onClick={re_fresh}>
									<i class="fas fa-redo"></i></button>
								<div className="row justify-content-center p-1">
								
								{
									department_data.map((department,index)=>(
										<Department_card departmentData={department} key={index} refresh={refresh} setRefresh={setRefresh}/>
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
export default CoeAcademics;