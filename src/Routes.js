
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom";
import Login from "./components/layout/LoginLayout/login";
import Logout from "./auth/logout";
import Error from "./components/layout/Error";
import StudentDashboard from "./components/layout/DashboardLayout/Student Dashboard/studentDashboard";
import FacultyDashboard from "./components/layout/DashboardLayout/Faculty Dashboard/FacultyDashboard";
import AdmissionDashboard from "./components/layout/DashboardLayout/Admission Dashboard/AdmissionDashboard";
import RegisterStudent from "./components/layout/DashboardLayout/Admission Dashboard/RegisterStudent";
import Check from "./components/check";
import StudentLecture from './components/layout/LectureLayout/studentLecture';
import SubRegistrarDashboard from "./components/layout/DashboardLayout/SubRegistrarDashboard/SubRegistrarDashboard";
import ConfirmAdmission from "./components/layout/DashboardLayout/SubRegistrarDashboard/ConfirmAdmission";
import CoeDashboard from "./components/layout/DashboardLayout/CoeDashboard/CoeDashboard";
import CoeAcademics from "./components/layout/DashboardLayout/CoeDashboard/CoeAcademics";
import CoeDepartments from "./components/layout/DashboardLayout/CoeDashboard/CoeDepartments";
import CoeSessions from "./components/layout/DashboardLayout/CoeDashboard/CoeSessions";
import HodDashboard from "./components/layout/DashboardLayout/hodDashboard/HodDashboard"
import HodSubjects from "./components/layout/DashboardLayout/hodDashboard/HodSubject";
import EditStudentInfo from "./components/layout/DashboardLayout/SubRegistrarDashboard/editStudentInfo";





const Routes = (
    <Router>
        <Switch>
            <Route exact path="/" component={Check} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/auth/logout" component = {Logout} />
            <Route exact path="/student/dashboard" component={StudentDashboard} />
            <Route path="/student/lecture" component={StudentLecture} />
            <Route path="/faculty/dashboard" component={ FacultyDashboard }/>
            <Route path="/admission/dashboard" component={AdmissionDashboard}/>
            <Route path="/admission/register" component={RegisterStudent}/>
            <Route path="/sub_registrar/dashboard" component={SubRegistrarDashboard}/>
            <Route path="/sub_registrar/register" component={ConfirmAdmission}/>
            <Route path="/coe/dashboard" component={CoeDashboard}/>
            <Route path="/coe/academics" component={CoeAcademics}/>
            <Route exact path="/coe/departments/:id" component={CoeDepartments}/>
            <Route exact path="/coe/departments/:id/subjects" component={CoeDepartments}/>
            <Route path="/coe/sessions" component={CoeSessions} />       
            <Route path="/hod/dashboard" component={HodDashboard} />   
            <Route path="/hod/subjects" component={HodSubjects} /> 
            <Route path="/sub_registrar/editStudentInfo/:id" component={EditStudentInfo}/>
            <Route component={Error} />
        </Switch>
    </Router>
)

export default Routes;
