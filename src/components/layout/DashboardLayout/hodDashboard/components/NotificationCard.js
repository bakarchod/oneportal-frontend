import React from 'react';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
// import {refresh,setRefresh} from '../FacultyDashboard';

const NotificationCard=({notificationData,refresh,setRefresh})=>{

   
    const conf_std=(event)=>{
        event.preventDefault();
        toast("Confirmed",{type:'success',progress:'undefined'})
    }

return (
	<div className="col-xl-12 col-lg-4 col-md-6 col-sm-12">
		<div className=" m-2 jumbotron">
			
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                {/* <img src="..." class="rounded mr-2" alt="..."> */}
                <strong class="mr-auto text-dark">{notificationData.message}</strong>
                {/* <small class="text-muted p-3">just now</small> */}
                {/* <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close"> */}
                {/* <span aria-hidden="true">&times;</span>
                </button> */}
            </div>
            <div class="toast-body text-dark">
                Just Now
            </div>
            </div>

	</div>
// </div>
)
}

export default NotificationCard;