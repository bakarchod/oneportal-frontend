
import React, { useState } from 'react';
// import '../dashboard.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { API } from '../../../../../API'
const SubjectCard = (Subjectdata) => {
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-10 col-lg-9 col-md-8 ml-auto">
                    <div class="row pt-md-5 mt-md-3 mb-5">

                        <div class="col-xl-3 col-sm-6 p-1 ml-5">
                            <div class="card card-common">
                                <div class="theme-background mr-2">
                                    <div class="card-body">
                                        <div class="justify-content-between">
                                            <i class="fas fa-university fa-1x text-warning"></i>
                                            <p>subjectData</p>

                                            <p style="font-size: small;" class="text-center text-white text-uppercase">
                                                Computer Networks
                                            </p>
                                            <p style="font-size: small;" class="text-center text-white text-uppercase">
                                                CS-2314
                                            </p>
                                            <p class="text-warning text-center small">
                                                Taught By : harish tiwari
                                            </p>
                                            <p class="text-warning text-center small">Credit : 4</p>
                                            <span class='text-center'><a style="text-decoration: none;color:white;" href="3/view">View Details</a></span>

                                        </div>
                                    </div>
                                </div>

                                <div class="card-footer text-secondary">
                                    <i class="fas fa-arrow-right mr-3"></i>
                                    <a href="/media/dbCreds.txt">Lesson plan</a> |
                                    <a class="small" style="text-decoration:none; " href="3/attendence">Attendance</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubjectCard;

