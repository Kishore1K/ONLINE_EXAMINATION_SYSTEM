import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/HOMEPAGE/landingpage'
import LoginPage from './context/auth/slogin'
import RegisterPage from './context/auth/sSignup'
import SignUpPage from "./context/auth/fsignup";
import SignInPage from "./context/auth/flogin";
import Dashboard from './context/FACULTY/dashboard.js'
import StdHome from './context/STUDENT/sDashboard.js'
import Home from './components/home.js'
import Home1 from './components/HOMEPAGE/homeStudent.js'
import fforgot from './context/auth/fforgot'
import sforgot from './context/auth/sforgot'
export default function App() {
                    return(
                        <Router>
                            <Switch>
                            <Route path="/fsignup" component={ SignUpPage } />
                            <Route path="/flogin" component={ SignInPage } />
                            <Route path="/fforget" component={ fforgot } />
                            
                            <Route path="/sforgot" component={ sforgot } />
                            <Route path="/login" component={ LoginPage } />
                            <Route path="/register" component={ RegisterPage } />
                            <Route exact path="/" component={Home} />
                            <Route exact path="/fhome" component={ LandingPage } />
                            <Route exact path="/shome" component={ Home1 } />
                            
                            <Route path="/FACULTY" component={ Dashboard } />
                            <Route path="/STUDENT" component={ StdHome } />
                            </Switch>
                        </Router>
                    )                    
}
       

        
            
