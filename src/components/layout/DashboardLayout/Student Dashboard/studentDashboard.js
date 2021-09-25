import React from 'react'
import '../dashboard.css';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
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
                                   <img src="images/logo.png" width="50" className="rounded-circle mr-3"  /> 
                                    <Link to="#" className="text-white text-uppercase text-center">Aniket Vyas</Link>
                                    <p className="text-center text-white custom-small">FACULTY |  | CSE </p>
                                </div>
                            </div>
                            <ul className="navbar-nav flex-column mt-4">
                                <li className="nav-item"><Link to="Home" className="nav-link text-white p-1 mb-2 current"><small><i className="fas fa-home text-light fa-sm mr-3"></i>Profile</small></Link></li>
                                <li className="nav-item"><Link to="attendance" className="nav-link text-white p-1 mb-2 sidebar-link"><small><i className="fas fa-user text-light fa-sm mr-3"></i>Attendence</small></Link></li>
                                <li className="nav-item"><Link to="/outpass" className="nav-link text-white p-1 mb-2 sidebar-link"><small><i className="fas fa-envelope text-light fa-sm mr-3"></i>Outing</small></Link></li>
                                <li className="nav-item"><Link to="/notice" className="nav-link text-white p-1 mb-2 sidebar-link"><small><i className="fas fa-shopping-cart text-light fa-sm mr-3"></i>Notice Board</small></Link></li>
                                <li className="nav-item"><Link to="#" className="nav-link text-white p-1 mb-2 sidebar-link"><small><i className="fas fa-chart-line text-light fa-sm mr-3"></i>Semster Marks</small></Link></li>
                                <li className="nav-item"><Link to="/calendar" className="nav-link text-white p-1 mb-2 sidebar-link"><small><i className="fas fa-chart-bar text-light fa-sm mr-3"></i> Calender</small></Link></li>
                                <li className="nav-item"><Link to="student/lecture" className="nav-link text-white p-1 mb-2 sidebar-link"><small><i className="fas fa-table text-light fa-sm mr-3"></i>Lecture Corner</small></Link></li>

                                <li className="nav-item"><Link to="/auth/logout" className="nav-link text-white p-1 mb-2 sidebar-link"><small><i className="fas fa-wrench text-light fa-sm mr-3"></i>Logout</small></Link></li>
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
                        <div className="col-xl-3 col-sm-6 p-2">
                            <div className="card card-common">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <i className="fas fa-shopping-cart fa-1x text-warning"></i>
                                        <div className="text-right text-secondary">
                                            <h5><small>Outing</small></h5>
                                            <h3>45</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-secondary">
                                    <i className="fas fa-sync mr-3"></i>
                                    <span>Updated Now</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 p-2">
                            <div className="card card-common">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <i className="fas fa-money-bill-alt fa-1x text-success"></i>
                                        <div className="text-right text-secondary">
                                            <h5><small>Attendence </small></h5>
                                            <h3>$39,000</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-secondary">
                                    <i className="fas fa-sync mr-3"></i>
                                    <span>Updated Now</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 p-2">
                            <div className="card card-common">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <i className="fas fa-users fa-1x text-info"></i>
                                        <div className="text-right text-secondary">
                                            <h5><small>Notifications</small></h5>
                                            <h3>15,000</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-secondary">
                                    <i className="fas fa-sync mr-3"></i>
                                    <span>Updated Now</span>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xl-3 col-sm-6 p-2">
                            <div className="card card-common">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <i className="fas fa-message fa-1x text-danger"></i>
                                        <div className="text-right text-secondary">
                                            <h5><small>Messages</small></h5>
                                            <h3>45,000</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-secondary">
                                    <i className="fas fa-sync mr-3"></i>
                                    <span>Updated Now</span>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    );
}

export default StudentDashboard;