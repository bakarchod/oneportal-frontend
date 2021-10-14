import React, { useState, useEffect } from 'react';
// import '../dashboard.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import $ from 'jquery'
// import Department_card from './components/Department_card';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Navbar from './components/Navbar';
// import SubjectCards from './components/subjectCards';
import { useParams } from 'react-router-dom'
// import SubjectCards from './components/subjectCards';

const HodSubjectTrack = ({param}) => {
	const [subject_data, setSubject_data] = useState([]);
	// const [refresh, setRefresh] = useState(true);
	const { id } = useParams()

	useEffect(() => {
		(async () => {
			let DepartmentData;
			try {
				// get_enrolled_students();
				get_lecture_record();
			} catch (error) {
				console.log("useEffect Error")
				console.log(error)
			}
		})();
	}, [])

	const fetchFile = (event,value) => {
		// console.log(`localhost:8000${param.notes}`,param.notes    )
        var t = param.notes
		 Axios.get(`https://oneportal.pythonanywhere.com${t}`,{
			//   headers: {
            //     "Cache-Control": null,
            //     "X-Requested-With": null,
            //     'Access-Control-Allow-Origin' : '*',
			// 	"Authorization": "Token " + localStorage.getItem('Token')
			// },
			  responseType: "blob" // important
		  }).then(response => {
              console.log(response)
			  const url = window.URL.createObjectURL(new Blob([response.data]));
			  const link = document.createElement("a");
			  link.href = url;
			  link.setAttribute(
				  "download",
				  `${url}`
			  );
			  document.body.appendChild(link);
			  link.click();
		  });
	  }
	//   render(){
	// 	return( <button onClick={this.fetchFile}> Download file </button>)
	//   }


	const get_lecture_record = () => {

		//   var token=
		//   console.log("Entered")
		//   console.log(token)
		console.log({ id }.id)
		Axios.get("http://oneportal.pythonanywhere.com/acads/get_lecture_record/" + id,
			{
				headers: {
					"Authorization": "Token " + localStorage.getItem('Token')
				}
			}).then(response => {
				setSubject_data(response.data)
				console.log(response.data)

			}).catch(error => {
				console.log(error)
			})
	}

	// const re_fresh = () => {
	// 	setRefresh(!refresh)
	// }

	return (
		<div>
			
			<ToastContainer position="bottom-right" />
                <li>
                    <div className="div">
                        <small className="text-orange"><time>{param.date}</time></small>
                        <p className="text-white">{param.subject.subject_name}</p><br />
                        <button type="button" onClick={(event)=>fetchFile(event)} className="btn btn-outline-warning btn-sm">View Notes</button>
                    </div>
                    
                </li>
                ))
                <li></li>

													
		</div>
	);
}
export default HodSubjectTrack;