import React, { useState } from 'react';
import '../../../components/NavBar/navbar.css';
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
                                        to="/home"
                                        activeClassName="active"
                                        
                                        onClick={click ? handleClick : null}
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/stdhome/profile"
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
                                    to="/stdhome/viewExam"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    view EXAM
                                </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/dashboard/viewQuiz"
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
                                    to="/dashboard/addquestion"
                                    activeClassName="active"
                                    onClick={click ? handleClick : null}

                                >
                                    UPDATE PROFILE
                                </NavLink>


                                </li>
                               
                                <li className='nav-item'>
                                <NavLink
                                    exact
                                    to="/"
                                    activeClassName="active"
                                    onClick={click ? handleClick : null}
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