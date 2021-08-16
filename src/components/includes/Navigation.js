import {NavLink} from "react-router-dom";
import React, {useEffect} from "react";
import {loadItemFromLocalStorage, saveItemToLocalStorage} from "../../utils";
import {HOST} from "../../utils/globals";
import data from "../data/data.json";
function Navigation(){
    let menuItem = loadItemFromLocalStorage("menu-item")
    useEffect(() => {
        //return saveItemToLocalStorage("profile", "menu-item")
    },[menuItem])
    return (
        <div className="widget mt-4">
            <ul className="list-unstyled sidebar-nav mb-0" id="navmenu-nav">
                <li className={(menuItem==="profile")?"navbar-item account-menu px-0":"navbar-item account-menu px-0"}>
                    <NavLink to="/" className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                        <span className="h4 mb-0"><i className="uil uil-dashboard"></i></span>
                        <h6 className="mb-0 ms-2">Profile</h6>
                    </NavLink>
                </li>
                <li className={(menuItem==="portfolio")?"navbar-item account-menu px-0 mt-2":"navbar-item account-menu px-0 mt-2"}>
                    <NavLink to="/portfolio" className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                        <span className="h4 mb-0"><i className="uil uil-file"></i></span>
                        <h6 className="mb-0 ms-2">Portfolio</h6>
                    </NavLink>
                </li>
                <li className={(menuItem==="contact")?"navbar-item account-menu px-0 mt-2":"navbar-item account-menu px-0 mt-2"}>
                    <NavLink to="/contact-me" className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                        <span className="h4 mb-0"><i className="uil uil-comment"></i></span>
                        <h6 className="mb-0 ms-2">Contact me</h6>
                    </NavLink>
                </li>
                <li className="navbar-item account-menu px-0 mt-2 d-none">
                    <NavLink to="/request-proposal" className="navbar-link d-flex rounded shadow align-items-center py-2 px-4">
                        <span className="h4 mb-0"><i className="uil uil-comment"></i></span>
                        <h6 className="mb-0 ms-2">Request a proposal</h6>
                    </NavLink>
                </li>
                <li className="navbar-item account-menu px-0 mt-2">
                    <a href={"uploads/cv/"+data.personal.cv} className="btn btn-soft-primary w-100" target="_blank"><i className="uil uil-print"></i> Download CV</a>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;