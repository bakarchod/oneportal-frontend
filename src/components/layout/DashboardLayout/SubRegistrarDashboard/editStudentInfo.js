import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { withRouter } from "react-router";
import { toast,ToastContainer } from "react-toastify";
import './style.css';
import { render } from "@testing-library/react";
import Axios from "axios";
import { studata } from "./components/Student_card";


const EditStudentInfo=(props)=>{
    // console.log("props",props.match.params.id)

    const [stu_data,setStu_data]=useState([]);
    const [dept,setDept]=useState([]);
    const [prg,setPrg]=useState([]);  
    const [data,setData]=useState([]);
    const [refresh,setRefresh]=useState(true); 

    useEffect(async ()=>{
        let result=await fetch("http://oneportal.pythonanywhere.com/sub_registrar/sub_get_single_student/"+props.match.params.id,
        {
            method:'GET',
            headers:{"Authorization" : "Token "+localStorage.getItem('Token')}
        });
        result=await result.json();
        console.log(result)
        setStu_data(result)
        setDept(result.department)
        setPrg(result.program)
    },[refresh])

    const submit=(event)=>{
        const formData = new FormData(event.currentTarget);
		event.preventDefault(); 
		var obj = {}
        console.log(formData.entries())
		for (let [key, value] of formData.entries()) {
			obj[key] = value;
		}
		console.log(obj);
        Axios.post("http://oneportal.pythonanywhere.com/sub_registrar/edit_details/"+props.match.params.id,
			(obj),
			{headers:{"Authorization" : "Token "+localStorage.getItem('Token')}}).then(response=>{
            console.log(response)
        }).catch(error=>{
                console.log(error)
        })

    }

    // const submit = (event) => {
	// 	const formData = new FormData(event.currentTarget);
	// 	event.preventDefault(); 
	// 	var obj = {}
	// 	for (let [key, value] of formData.entries()) {
	// 		obj[key] = value;
	// 	}
	// 	console.log(obj);
		
	//   };

    // const save=()=>{
    //     toast("Saved",{type:"success"})
    // }
    // const save_and_exit=()=>{
    //     toast("Saved and exit",{type:"success",autoClose:3000})
    // }
    const exit=()=>{
        window.location = '/sub_registrar/register'
        toast("Exit",{type:"error",autoClose:3000})
    }


    return(
        <div>
            <Navbar></Navbar>
            <ToastContainer position="bottom-right"/>

    <section>
        <div className="container-fluid mb-5">
			<div className="col-xl-10 col-lg-10 col-md-8 ml-auto">
				<div className="row justify-content-center">
					<div className="col-xl-12 col-lg-12 col-md-12 ml-auto">
						<div className="card">
							<div className="card card-common"> 
								<h3 className="text-white justify-content-center text-center pt-2">Edit Student</h3>
								<div className="row justify-content-center mt-5">
                                    <div className="col-xl-10">
                                    <form onSubmit={submit} >
                                            <div className="form-group row">
                                                <label className="ccol-sm-2 col-form-label col-sm-2 col-form-label  hello">Name :</label>
                                                <input className="col-sm-10 col-sm-10 form-control" type="text" name="name" defaultValue={stu_data.name}/>
                                            </div>
                                            <div className="form-group row">
                                            <label className="col-sm-2 col-form-label ">Program :</label>
                                            <input className="col-sm-10 form-control" name="program" type="text" defaultValue={prg.name}/>
                                            </div>
                                            <div className="form-group row">
                                            <label className="col-sm-2 col-form-label ">Department :</label>
                                            <input className="col-sm-10 form-control" name="department" type="text" defaultValue={dept.department_code}/>
                                            </div>
                                            <div className="form-group row">
                                            <label className="col-sm-2 col-form-label ">Batch Start :</label>
                                            <input className="col-sm-10 form-control" name="batch_start" type="date" defaultValue={stu_data.batch_start}/>
                                            </div>
                                            <div className="form-group row">
                                            <label className="col-sm-2 col-form-label ">Batch End</label>
                                            <input className="col-sm-10 form-control" name="batch_end" type="date" defaultValue={stu_data.batch_end}/>
                                            </div>
                                            <div className="form-group row">
                                            <label className="col-sm-2 col-form-label ">Personal E-Mail :</label>
                                            <input className="col-sm-10 form-control" name="personal_email_id" type="email" defaultValue={stu_data.personal_email_id}/>
                                            </div>
                                            <div className="form-group row">
                                            <label className="col-sm-2 col-form-label ">Phone :</label>
                                            <input className="col-sm-10 form-control" name="phone" type="tel" maxLength="10" defaultValue={stu_data.phone}/>
                                            </div>
                                            <div className="form-group row">
                                        
                                            <label className="col-sm-2 col-form-label ">Last Qualification :</label>
                                            <input className="col-sm-10 form-control"name="last_qualification" type="text" defaultValue="12"/>
                                            </div>
                                            <div className="form-group row">
                                            <label className="col-sm-2 col-form-label ">Street Address :</label>
                                            <input className="col-sm-10 form-control" name="street_address" type="text" defaultValue={stu_data.street_address}/>
                                            </div>
                                            <div className="form-group row">
                                            <label className="col-sm-2 col-form-label ">District :</label>
                                            <input className="col-sm-10 form-control" name="district" type="text" defaultValue={stu_data.district}/>
                                            </div>
                                            <div className="form-group row">
                                            <label className="col-sm-2 col-form-label ">State :</label>
                                            <input className="col-sm-10 form-control" name="state" type="text" defaultValue={stu_data.state}/>
                                            </div>
                                            <div className="form-group row">
                                            <label className="col-sm-2 col-form-label ">Pincode :</label>
                                            <input className="col-sm-10 form-control" name="pincode" type="tel" maxLength="8" defaultValue={stu_data.pincode}/>
                                            </div>
                                            <div className="row justify-content-center">
                                                <button type="submit" className="btn btn-success">Save</button>
                                                {/* <button type="button" className="btn btn-success ml-2 mr-2" onClick={()=>save_and_exit()}>Save & Confirm</button> */}
                                                <button type="button" className="btn btn-danger" onClick={()=>exit()}>Exit</button>
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
    </section>               
    </div>
);
}

export default EditStudentInfo; 
