
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
import FacultyDashboard from "./components/layout/DashboardLayout/FacultyDashboard/FacultyDashboard";
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
import HodStudents from "./components/layout/DashboardLayout/hodDashboard/HodStudents";
import EditStudentInfo from "./components/layout/DashboardLayout/SubRegistrarDashboard/editStudentInfo";
import AdmissionEditStudentInfo from "./components/layout/DashboardLayout/Admission Dashboard/editStudentInfo";
import HodIndividualSubject from "./components/layout/DashboardLayout/hodDashboard/HodIndividualSubject";
import HodSubjectTrack from "./components/layout/DashboardLayout/hodDashboard/HodSubjectTrack"
import HodCurriculum from './components/layout/DashboardLayout/hodDashboard/HodCurriculum'
import FacultyLectureCorner from "./components/layout/DashboardLayout/FacultyDashboard/FacultyLectureCorner"



const Routes = (
    <Router>
        <Switch>
            <Route exact path="/" component={Check} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/auth/logout" component = {Logout} />
            <Route exact path="/student/dashboard" component={StudentDashboard} />
            <Route exact path="/student/lecture" component={StudentLecture} />
            <Route exact path="/faculty/dashboard" component={ FacultyDashboard }/>
            <Route exact path="/admission/dashboard" component={AdmissionDashboard}/>
            <Route exact path="/admission/register" component={RegisterStudent}/>
            <Route exact path="/admission/editStudentInfo/:id" component={AdmissionEditStudentInfo}/>
            <Route exact path="/sub_registrar/dashboard" component={SubRegistrarDashboard}/>
            <Route exact path="/sub_registrar/register" component={ConfirmAdmission}/>
            <Route exact path="/sub_registrar/editStudentInfo/:id" component={EditStudentInfo}/>
            <Route exact path="/coe/dashboard" component={CoeDashboard}/>
            <Route exact path="/coe/academics" component={CoeAcademics}/>
            <Route exact path="/coe/departments/:id" component={CoeDepartments}/>
            <Route exact path="/coe/departments/:id/subjects" component={CoeDepartments}/>
            <Route exact path="coe/academics/department/:id" component={CoeDepartments} />
            <Route exact path="/coe/sessions" component={CoeSessions} />       
            <Route exact path="/hod/dashboard" component={HodDashboard} />   
            <Route exact path="/hod/subjects" component={HodSubjects} /> 
            <Route exact path="/hod/subject/:id/" component={HodIndividualSubject} /> 
            <Route exact path="/hod/students" component={HodStudents} /> 
            <Route exact path="/hod/subject/:id/track" component={HodSubjectTrack} /> 
            <Route exact path="/hod/curriculum" component={HodCurriculum} />

            <Route exact path="/faculty/lecture_corner" component={FacultyLectureCorner} />
            
            <Route component={Error} />
        </Switch>
    </Router>
)

export default Routes;
