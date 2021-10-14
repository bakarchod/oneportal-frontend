import React, { useState,useEffect } from 'react';
import '../dashboard.css';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import SubjectCard from'./components/SubjectCard'
import Axios from 'axios';
import { API } from '../../../../API'


const FacultyDashboard = () => {
    const [subject_data, setSubject_data] = useState([]);
    const [refresh,setRefresh] = useState([])

    useEffect(()=>{
        (async()=>{
            try{
                get_subjects();
            } catch(error){
                console.log("useEffect Error")
                console.log(error)
            }
        })();
    },[refresh])

    const get_subjects=()=>{
		  
		  Axios.get(`${API}/faculty/get_subjects_faculty`,
		  	{headers:{
				  "Authorization" : "Token "+localStorage.getItem('Token')
				}
			}).then(response=>{
				setSubject_data(response.data)
				console.log(subject_data,response.data);
			}).catch(error=>{
				console.log(error);
			})
	  }
      const re_fresh = () => {
          setRefresh(!refresh);
      }



    return (
        <div>
        <Navbar></Navbar>
        {
            subject_data.map((sub,index) => {
                <SubjectCard subjectData={sub} key={index} />
            }
            )
        }
    </div>
    );
}

export default FacultyDashboard;