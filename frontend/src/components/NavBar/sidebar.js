import React, { useState } from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';
const ToggleSidebar = () => {
    const [isOpen, setIsopen] = useState(false);
    const [click, setClick] = React.useState(false);

    const handleClick = () => setClick(!click);
    // const Close = () => setClick(false);
  


    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }
    return (
        <>
            <div className="container-fluid mt-3">
                
 
                    <div className="btn btn-primary" onClick={ToggleSidebar} >
                                    <i className="fa fa-bars">MENU</i>
                    </div>
                    <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
                        <div className="sd-header">
                            <h4 className="mb-0">MENU</h4>
                            <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times"></i></div>
                        </div>
                        <div className="sd-body">
                            <ul>
                            <li className="nav-item">
                            
                                <NavLink
                                    exact
                                        to="/FACULTY/home"
                                        activeClassName="active"
                                        
                                        onClick={click ? handleClick : null}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/FACULTY/profile"
                                    activeClassName="active"
                                    // className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    PROFILE
                                </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/FACULTY/addQuiz"
                                    activeClassName="active"
                                    // className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    ADD QUIZ
                                </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/FACULTY/viewQuiz"
                                    activeClassName="active"
                                    // className="nav-links"
                                onClick={click ? handleClick : null}
                                >
                                    View Quiz
                                </NavLink>
                                </li>
                                <li className='nav-item'>
                                <NavLink
                                    exact
                                    to="/FACULTY/addquestion"
                                    activeClassName="active"
                                    onClick={click ? handleClick : null}

                                >
                                    ADD QUESTIONS
                                </NavLink>


                                </li>
                                <li className='nav-item'>
                                <NavLink
                                    exact
                                    to="/FACULTY/addStudent"
                                    activeClassName="active"
                                    onClick={click ? handleClick : null}
                                    >
                                    ADD STUDENT
                                    </NavLink>

                                </li>
                                
                                
                                <li className='nav-item'>
                                <NavLink
                                    exact
                                    to="/FACULTY/update"
                                    activeClassName="active"
                                    onClick={click ? handleClick : null}
                                    >
                                        SETTINGS
                                </NavLink>
                                </li>

                                <li className='nav-item'>
                                <NavLink
                                    exact
                                    to="/"
                                    activeClassName="active"
                                    onClick={()=> {
                                        if(window.confirm('Are you sure you want to logout?')){
                                        localStorage.clear();
                                        sessionStorage.removeItem('LoginUser');
                                        window.location.assign('/fhome')
                                    }}}
                                    >
                                        Logout
                                </NavLink>
                                </li>

                                
                            </ul>
                        </div>
                    </div>
                    <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
           </div>
           
        </>
    )
}


export default ToggleSidebar;