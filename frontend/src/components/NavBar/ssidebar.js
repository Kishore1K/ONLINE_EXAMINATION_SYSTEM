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
                                        to="/STUDENT/home"
                                        activeClassName="active"
                                        
                                        onClick={click ? handleClick : null}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink
                                    exact
                                        to="/STUDENT/profile"
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
                                        to="/STUDENT/viewExam"
                                        activeClassName="active"
                                    // className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    view EXAM
                                </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/STUDENT/result"
                                    activeClassName="active"
                                    // className="nav-links"
                                onClick={click ? handleClick : null}
                                >
                                    RESULTS 
                                </NavLink>
                                </li>
                                <li className='nav-item'>
                                <NavLink
                                    exact
                                    to="/STUDENT/update"
                                    activeClassName="active"
                                    onClick={click ? handleClick : null}

                                >
                                    UPDATE PROFILE
                                </NavLink>


                                </li>
                               <li>
                                <NavLink
                                    exact
                                    to="/"
                                    activeClassName="active"
                                    onClick={()=> {
                                        if(window.confirm('Are you sure you want to logout?')){ 
                                        sessionStorage.removeItem('SLoginUser');
                                        
                                        window.location.assign('/shome')
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