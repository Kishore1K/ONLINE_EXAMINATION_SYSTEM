import React from "react";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import ToggleSidebar from "../../components/NavBar/sidebar";
import Profile from "./components/profile";
import AddQuestion from "./components/AddQuestions";
import AddQuiz from './components/AddQuiz'
import ViewQuiz from './components/viewQuiz'
import AddStudent from "./components/addstudent";
import VIEWMODE from "./components/viewMode";
import Result from "./components/Results";
import Update from "./components/update";
import Home from "./components/home";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";



export default function Dashboard() {
    //Pages

    if(sessionStorage.getItem('LoginUser') === null){
        return <Redirect to="/flogin" />
    }else{
  
    return (
      <>
        <BrowserRouter>
        <ToggleSidebar />
  
          <div className="pages">
            <Switch>
              <Route path="/FACULTY/home" component={Home} />
              <Route path="/FACULTY/profile" component={Profile} />
              <Route path="/FACULTY/addQuiz" component={AddQuiz} />
              <Route path="/FACULTY/addquestion" component={AddQuestion} />
              <Route path="/FACULTY/viewQuiz" component={ViewQuiz} />
              <Route path="/FACULTY/addStudent" component={AddStudent} />
              <Route path="/FACULTY/viewMode" component={VIEWMODE} />
              <Route path="/FACULTY/results" component={Result} />
              <Route path="/FACULTY/update" component={Update} />
            </Switch>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
  
