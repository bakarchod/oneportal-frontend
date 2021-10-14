import React, { useState,useEffect } from 'react';
import '../dashboard.css';
import { API } from '../../../../API';
import Axios from 'axios';
import Student_card from './components/Student_card';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import EditStudentInfo from '../SubRegistrarDashboard/editStudentInfo';

const ConfirmAdmission = (data) => {
	const [stu_data,setStu_data]=useState([]);
	const [refresh,setRefresh]=useState(true);

	// const submit = (event) => {
	// 	const formData = new FormData(event.currentTarget);
	// 	event.preventDefault();
	// 	var obj = {}
	// 	for (let [key, value] of formData.entries()) {
	// 		obj[key] = value;
	// 	}
	// 	console.log(obj);
	// 	Axios.post(`${API}/admissions/add_single_student",
	// 		(obj),
	// 		{headers:{"Authorization" : "Token "+localStorage.getItem('Token')}}).then(response=>{
    //         console.log(response)
    //     }).catch(error=>{
    //             console.log(error)
    //     })
	//   };


	  useEffect(()=>{
		  (async()=>{
			  let StuData;
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
		  Axios.get(`${API}/sub_registrar/sub_get_student`,
		  	{headers:{
				  "Authorization" : "Token "+localStorage.getItem('Token')
				}
			}).then(response=>{
				setStu_data(response.data)
				console.log(stu_data)
			}).catch(error=>{
				console.log(error)
			})
	  }

	  const re_fresh=()=>{
		  setRefresh(!refresh)
	  }
	  const edit_stu=()=>{
		<EditStudentInfo />
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
								<h3 class="text-white text-center pt-2">Pending Admission</h3>
								<button type="button" class="btn btn-outline-primary ml-auto" onClick={re_fresh}>
									<i class="fas fa-redo"></i></button>
								<div className="row justify-content-center p-1">
								
								{
									stu_data.map((student,index)=>(
										<Student_card studentData={student} key={index} refresh={refresh} setRefresh={setRefresh}/>
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
export default ConfirmAdmission;