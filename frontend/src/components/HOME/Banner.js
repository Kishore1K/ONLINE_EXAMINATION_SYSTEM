import React from 'react';
import { Link } from 'react-router-dom';

import './Banner.css';

export default function Home() {
    const bannerStyle = {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
    }

    return (
        <div className="Banner" style={bannerStyle}>
            <div className="menubar">
                <Link to="/">
                    <div className="brand">
                        <span className="logo">EX</span>
                        <span className="name">Examiner</span>
                    </div>
                </Link>
                
            </div>
            <div className="banner-container">
                <h1 className="head">Online Examing</h1>
                <p className="content">
                    The best way to taking online exam
                </p>
            </div>
            
        </div>
    );
}

