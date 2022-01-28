//Student Dashboard
import React from 'react';
// import { Link } from 'react-router-dom';
// import axios from "axios";
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Profile from './componets/profile.js';
import NavBar from '../../components/NavBar/ssidebar'
import ViewExam from './componets/viewExam';
import Quiz from './componets/quiz';
import Home from './componets/home.js';
import Result from './componets/Result';
import Update from './componets/update.js';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

// open pages if user is logged in else redirect to login page

const Student = () => {
    if(sessionStorage.getItem('SLoginUser') === null){
        return <Redirect to="/login" />
    }else{
        return(
            <>
            <BrowserRouter>
            <NavBar />
            <div className="pages">
            <Switch>
                <Route path="/STUDENT/home" component={Home} />
                <Route path="/STUDENT/profile" component={Profile} />
                <Route path="/STUDENT/viewExam" component={ViewExam} />
                <Route path="/STUDENT/quiz" component={Quiz} />
                <Route path="/STUDENT/result" component={Result} />
                <Route path="/STUDENT/update" component={Update} />
            </Switch>
            </div>
            </BrowserRouter>
            </>
        )
    }
}
export default Student;