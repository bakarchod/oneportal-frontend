
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
import StudentDashboard from "./components/layout/DashboardLayout/studentDashboard";
import FacultyDashboard from "./components/layout/DashboardLayout/Faculty Dashboard/FacultyDashboard";
import Check from "./components/check";
import StudentLecture from './components/layout/LectureLayout/studentLecture';
const Routes = (
    <Router>
        <Switch>
            <Route exact path="/" component={Check} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/auth/logout" component = {Logout} />
            <Route exact path="/student/dashboard" component={StudentDashboard} />
            <Route path="/student/lecture" component={StudentLecture} />
            <Route path="/faculty/dashboard" component={ FacultyDashboard }/>
            <Route path="/admission/dashboard/" component={FacultyDashboard}/>
            <Route component={Error} />
        </Switch>
    </Router>
)

export default Routes;