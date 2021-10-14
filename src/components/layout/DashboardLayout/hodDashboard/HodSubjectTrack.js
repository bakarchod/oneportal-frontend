import React, { useState, useEffect } from 'react';
import '../dashboard.css';
import Axios from 'axios';
import $ from 'jquery'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import { useParams } from 'react-router-dom'
import Timeline from "./components/Timeline"

const HodSubjectTrack = (subjectData,data) => {
	const [subject_data, setSubject_data] = useState([]);
	const [refresh, setRefresh] = useState(true);
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
	}, [refresh])

	const fetchFile = (event,value) => {
		console.log(subjectData)
		//  return fetch({
		// 	  url: `oneportal.pythonanywhere.com/${urll}`,
		// 	  method: "GET",
		// 	  headers: {
		// 		"Authorization": "Token " + localStorage.getItem('Token')
		// 	},
		// 	  responseType: "blob" // important
		//   }).then(response => {
		// 	  const url = window.URL.createObjectURL(new Blob([response.data]));
		// 	  const link = document.createElement("a");
		// 	  link.href = url;
		// 	  link.setAttribute(
		// 		  "download",
		// 		  `${url}`
		// 	  );
		// 	  document.body.appendChild(link);
		// 	  link.click();
		//   });
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

	const re_fresh = () => {
		setRefresh(!refresh)
	}

	return (
		<div>
			<Navbar></Navbar>
			<ToastContainer position="bottom-right" />
			<section>
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
							<div className="row pt-md-5 mt-md-3 mb-5">
								<div className="col-xl-12 col-sm-6 p-1 ml-5">
									<div className="card card-common">
										<div className="card-body">
											<div className="d-flex justify-content-between">
												<section className="timeline">
													<ol>
													{subject_data.map((param,index)=>(
														<Timeline param={param} />
														))
												}
														<li></li>
													</ol>

													<div className="arrows">
														<button className="arrow arrow__prev">
															<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_prev.svg" alt="prev timeline arrow" />
														</button>
														<button className="arrow arrow__next">
															<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_next.svg" alt="next timeline arrow" />
														</button>
													</div>
												</section>
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
export default HodSubjectTrack;