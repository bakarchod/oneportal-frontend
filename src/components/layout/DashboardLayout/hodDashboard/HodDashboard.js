import React, { useState,useEffect } from 'react';
import '../dashboard.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Student_card from '../Admission Dashboard/components/Student_card';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import NotificationCard from './components/NotificationCard';

const CoeDashboard = (data) => {
    const [notification_data,setNotification]=useState([]);
    const [refresh,setRefresh]=useState(true);


    useEffect(()=>{
        (async()=>{
            let notificationData;
            try{
                get_notification();
            } catch(error){
                console.log("useEffect Error")
                console.log(error)
            }
        })();
    },[refresh])

    const get_notification=()=>{
		  
		//   var token=
		//   console.log("Entered")
		//   console.log(token)
		  Axios.get("http://oneportal.pythonanywhere.com/hod/get_notification",
		  	{headers:{
				  "Authorization" : "Token "+localStorage.getItem('Token')
				}
			}).then(response=>{
				setNotification(response.data)
				console.log(notification_data)
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
				<div className="row col-xl-10 col-lg-9 col-md-8 ml-auto">
					{/* <div className="col-xl-10 col-lg-9 col-md-8 "> */}
						<div className="row">
								<div className="col-6 col-xl-10 col-lg-9 col-md-8">
									<h1>Dashboard</h1>
								</div>
								<div className="col">
									<h1>Welcome</h1>
								</div>
						</div>
						
    			    	<div className="notifications ml-auto">
                            <div className="col-xl-8">
                            <div className="card">
                                <div className="card card-common p-2" >
                                    <h1 class="text-white text-center">Notification</h1>
                                {
									notification_data.map((notification,index)=>(
										<NotificationCard notificationData={notification} key={index} refresh={refresh} setRefresh={setRefresh}/>
									))
								}

                               
                                    
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