import React , {useEffect, useState} from 'react'
import API from '../../../API';
import { getLectures } from '../../../backend/coreAPICalls';
import '../DashboardLayout/dashboard.css';
import { Link } from 'react-router-dom';

const StudentLecture = () => {
    const [lectures, setLectures] = useState([])
    const [error,setError] = useState([])

    const loadLectures = () =>{
        getLectures().then(data => {
            if(data.error){
                setError(data.error);
                console.log(error)
            }
            else{
                console.log("duru",data.data)
                setLectures(data);
            }
        }).catch(err => console.log(err));
    }

    useEffect(() => {
        loadLectures()
    },[]);


    
        // return (
        //     <div>
        //     {lectures.map( (lecture, index) => {
        //         return (<div>
        //             <h1>{lecture.subject_name}</h1>
        //         </div>
        //         );}
        //         )
    
        //     }
        //     </div>
        // )
        // }
  
    return (
        <div>
            
             <nav className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">
                        <div className="bottom-border p-3 mt-3">
                            <div className="one-portal bottom-border">
                                <h4 className="text-white text-uppercase text-center mb-3">One Portal</h4>
                            </div>
                            <div className="info my-3 text-center">
                                <Link to="#" className="text-white text-uppercase text-center">Aniket Vyas</Link>
                                <p className="text-center text-white small">Student |  |  </p>
                            </div>
                        </div>
                        <ul className="navbar-nav flex-column mt-4">
                            <li className="nav-item"><Link to="Home" className="nav-link text-white p-1 mb-2 current"><small><i className="fas fa-home text-light fa-sm mr-3"></i>Profile</small></Link></li>
                            {/* <!-- <li className="nav-item"><Link to="lecture" className="nav-link text-white p-1 mb-2 sidebar-link"><small><i className="fas fa-table text-light fa-sm mr-3"></i>Lecture Corner</small></Link></li> --> */}
                            <li className="nav-item"><Link to="/academic/student/quizStudentView" className="nav-link text-white p-1 mb-2 sidebar-link"><small><i className="fas fa-table text-light fa-sm mr-3"></i>Quiz</small></Link></li>

                            <li className="nav-item"><Link to="/academic/student/assignmentStudentView" className="nav-link text-white p-1 mb-2 sidebar-link"><small><i className="fas fa-table text-light fa-sm mr-3"></i>Asignment</small></Link></li>

                            <li className="nav-item"><Link to="/accounts/logout" className="nav-link text-white p-1 mb-2 sidebar-link"><small><i className="fas fa-wrench text-light fa-sm mr-3"></i>Logout</small></Link>
                               </li>

                        </ul>
                    </div>
            
                </div>
            </div>
        </div>
    </nav>



    
    <section>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                    <div className="row pt-md-5 mt-md-3 mb-5">
                        {lectures.map( (lecture,index) => {
                            return( <div key={lecture.id} className="col-xl-3 col-sm-6 p-1 ml-5">
                                    <div className="card card-common">
                                        <div className="theme-background mr-2">
                                            <div className="card-body">
                                                <div className="justify-content-between">
                                                    <i className="fas fa-university fa-1x text-warning"></i>

                                                    <p className="text-center text-white text-uppercase">
                                                        {lecture.subject_name}
                                                    </p>
                                                    <p className="text-warning text-center small">
                                                        Taught By : {lecture.faculty.faculty_id.name}
                                                    </p>
                                                    <p className="text-warning text-center small">Credit : {lecture.credit}</p>
                                                    <span className='text-center text-white'><Link to={lecture.id +"/track"}>View Details</Link></span>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-footer text-secondary">
                                            <i className="fas fa-arrow-right mr-3"></i>
                                            <Link to="#">Lesson plan</Link> |
                                            <Link className="small" href="1/attendence">Attendance</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>
     
   
        </div>
    )
}
export default StudentLecture;