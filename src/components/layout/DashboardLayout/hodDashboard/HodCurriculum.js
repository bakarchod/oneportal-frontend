import React, { useState,useEffect } from 'react';
import '../dashboard.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { API } from '../../../../API';
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import CurriculumCard from './components/CurriculumCard';
import $ from 'jquery'

const CoeDashboard = (data) => {
    const [curriculum_data,setcurriculum]=useState([]);
    const [subject,setSubject]=useState([]);
    const [batch,setBatch]=useState([]);
    const [refresh,setRefresh]=useState(true);


    useEffect(()=>{
        (async()=>{
            let notificationData;
            try{
                get_batch();
                get_curriculum();
                get_subjects_dept();
                
            } catch(error){
                console.log("useEffect Error")
                console.log(error)
            }
        })();
    },[refresh])

    const get_subjects_dept=()=>{
		  
		//   var token=
		//   console.log("Entered")
		//   console.log(token)
		  Axios.get(`${API}/hod/get_subjects_dept`,
		  	{headers:{
				  "Authorization" : "Token "+localStorage.getItem('Token')
				}
			}).then(response=>{
				setSubject(response.data);
				console.log(response.data,curriculum_data)
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
				console.log(response.data,batch)
			}).catch(error=>{
				console.log(error)
			})
	  }

    const get_curriculum=()=>{
		  
		//   var token=
		//   console.log("Entered")
		//   console.log(token)
		  Axios.get(`${API}/hod/get_curriculum`,
		  	{headers:{
				  "Authorization" : "Token "+localStorage.getItem('Token')
				}
			}).then(response=>{
				setcurriculum(response.data);
				console.log(response.data,curriculum_data)
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
                if (value == "on"){
                    obj2[key] = value
                    obj['subjects'] = {...obj2}
                }
                else{
                obj[key] = value;

                }
            }
            console.log(obj);
            Axios.post(`${API}/hod/create_curriculum`,
                (obj),
                {headers:{"Authorization" : "Token "+localStorage.getItem('Token')}}).then(response=>{
                    window.$('#addCurriculum').modal('hide');
                    re_fresh();
                    toast(response.data.msg)
                console.log(response)
            }).catch(error=>{
                    console.log(error)
            })
          };
    
      const addCurriculum = () => {
          console.log("loda")
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
				<div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
						
    			    	<div className="notifications ml-auto">
                            <div className="col-xl-12">
                            <div className="card">
                                <div className="card card-common" >
                                    <h1 class="text-white text-center">Curriculum</h1>
                                    <button onClick={addCurriculum} class="btn btn-outline-secondary"  data-toggle="modal" data-target="#addCurriculum">Add Curriculum
                                    </button>

                                    
                                    <div class="modal fade" id="addCurriculum" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg" role="document">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <form onSubmit={submit} >

                                        
                                        <div class="modal-body">
                                            <div className="row m-2">
                                                <div className="col-xl-6">
                                                    <label className="text-dark bold">Curriculum Name</label>
                                                    <input type="text" name="curriculum_name" className="form-control" placeholder="curriculum name" />
                                                </div>
                                                <div className="col-xl-6">
                                                <label className="text-dark bold">Select Batch</label>
                                                    <select name="batch">
                                                       {
                                                           batch.map((bat,index) => (
                                                            <option value={bat.name} key={index}>{bat.name}</option>
                                                           ))
                                                       }
                                                        
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row m-2">
                                                <div className="col-xl-6 text-center">
                                                    <label className="text-dark bold">Valid Till</label>
                                                    <input type="date" name="valid_till" className="form-control" placeholder="valid till" />
                                                </div>
                                                <div className="col-xl-6">
                                                    <label className="text-dark bold"> Document (Optional)</label>
                                                    <input type="file" name="document" className="form-control" />
                                                </div>
                                            </div>
                                            <div className=" mt-3"> 
                                                <p className="text-dark bold text-center">Select the list of subjects for this curriculum <br /></p> 
                                            
                                                </div>
                                            <div className="row justify-content-center">
                                                
                                                {
                                                    subject.map((sub,index) => (
                                                        <div className="text-dark ml-2 mr-2">
                                                        <input type="checkbox"className="form-control-checkbox" name={sub.id} id="loda" /> <label>{sub.subject_name}</label>
                                                        </div>
                                                    ))
                                                }
                                                
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
                                    <div className="row">
                                    {
									curriculum_data.map((curriculum,index)=>(
										<CurriculumCard curriculumData={curriculum} key={index} refresh={refresh} setRefresh={setRefresh}/>
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

export default CoeDashboard;