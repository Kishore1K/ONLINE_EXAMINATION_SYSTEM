import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
// import BackgroundImage from '../../assets/images/bg.png'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">login / register page</h1>
            <p className="main-para text-center">join us now and don't waste time</p>
            <div className="buttons text-center">
                    <button className="primary-button" onClick={()=> {
                        if(sessionStorage.getItem('SLoginUser')){
                            if(window.confirm('You are already logged in as a student if You wish to continue as a student ')){
                                window.location.assign('/STUDENT/home')
                            }else{
                                window.location.assign('/login')
                            }
                        }else{
                            window.location.assign('/login')
                        }
                        
                    }} >log in</button>
                
                
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"  ><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height : '100vh',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}