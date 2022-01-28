import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import "./dashboard.css";
import Banner from "./HOME/Banner";
import GoToBoard from "./HOME/GoTo";

export default function Home() {
    return (
        <div className="Home">
            <Banner></Banner>
            <GoToBoard></GoToBoard>
        </div>
    );
}