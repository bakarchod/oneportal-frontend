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
	const [student_data,setStudent_data]=useState([]);
	// const [refresh,setRefresh]=useState(true);
    const { id } = useParams()

	  useEffect(()=>{
		  (async()=>{
			  let DepartmentData;
			  try{
				//   get_department();
				  get_students();
			  } catch(error){
				  console.log("useEffect Error")
				  console.log(error)
			  }
		  })();
	  },[])
      
	//   const get_faculty=()=>{
		  
	// 	//   var token=
	// 	//   console.log("Entered")
	// 	//   console.log(token)
    //     console.log({id}.id)
	// 	  Axios.get("http://oneportal.pythonanywhere.com/datamanager/get_faculty",
	// 	  	{headers:{
	// 			  "Authorization" : "Token "+localStorage.getItem('Token')
	// 			}
	// 		}).then(response=>{
	// 			setFaculty_data(response.data)
	// 			console.log(response.data)
				
	// 		}).catch(error=>{
	// 			console.log(error)
	// 		})
	//   }
	  const get_students=()=>{
		  
		//   var token=
		//   console.log("Entered")
		//   console.log(token)
        console.log({id}.id)
		  Axios.get("http://oneportal.pythonanywhere.com/acads/hod_get_students",
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

	//   const re_fresh=()=>{
	// 	  setRefresh(!refresh)
	//   }
	//   const handle = (e) =>{
	// 	this.setState({file:e.target.files[0]})
	//   }

    const search = () => {
            $("#search").on("keyup", function() {
              var value = $(this).val().toLowerCase();
              $("#studentTable tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
              });
            });
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
								<h3 class="text-white text-center pt-2">Students Section {id}</h3>
								<div className="row ml-auto">
								{/* <button type="button" class="btn btn-outline-primary" onClick={re_fresh}>
									<i class="fas fa-redo"></i></button> */}
                                    <input type="text" id="search" class="form-control m-2 ml-auto" onKeyUp={search} placeholder="filter" />

									</div>
							
								<div className="row p-1">
                                    
                                <table class="table table-dark" >
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Degree</th>
                                        </tr>
                                    </thead>
                                    <tbody id="studentTable">
                                    {
									student_data.map((student,index)=>(
                                        <tr key={index}>
                                            <th scope="row">1</th>
                                            <td>{student.name}</td>
                                            <td>{student.university_email_id}</td>
                                            <td>{student.phone}</td>
                                            <td>{student.program.name}</td>
                                        </tr>
                                        ))
                                    }
                                    </tbody>
                                    </table>








                                    
								{/* {
									student_data.map((student,index)=>(
										<SubjectCards subjectData={student} key={index} refresh={refresh} setRefresh={setRefresh} />
									))
								}
								 */}
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