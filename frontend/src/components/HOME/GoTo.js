import React from 'react';
import { Link } from 'react-router-dom';

import './GoTo.css';
// import reactDom from 'react-dom';

// import ButtonPrimary from '../buttons/ButtonPrimary';

export default function GoToBoard() {
    return (
        <div className="GoToBoard">
            <div className="bottom-wrap">
                
                <button className="gtb student">
                    <Link to="/shome">
                        <div className="title">Student</div>
                        

                    </Link>
                </button>
                <button className="gtb teacher">
                    <Link to="/fhome">
                        <div className="title">Teacher</div>
                    </Link>
                </button>


            </div>
        </div>
    );
}