import React,{useState,useEffect} from 'react';
import {BrowserRouter, Route, Switch, Redirect, HashRouter} from "react-router-dom";
import {Link, NavLink} from "react-router-dom";
import Profile from "../components/Profile"
import Portfolio from "../components/Portfolio"
import Contact from "../components/Contact"
import Messages from "../components/Messages"
import ThankYou from "../components/ThankYou"
import Error from "../components/Error"
import Terms from "../components/Terms"
import Privacy from "../components/Privacy"
import Navigation from "../components/includes/Navigation"
import data from "../data/data.json"
import {loadItemFromLocalStorage} from "../utils/"
function Main() {

    return (
        <HashRouter>
        <section className="section mt-60">
        <div className="container mt-lg-3">
        <div className="row">
            <div className="col-lg-4 col-md-6 col-12 d-lg-block">
                <div className="sidebar sticky-bar p-4 rounded shadow">
                    <div className="widget">
                        <ul className="list-unstyled">
                            {data.personal.birthdate?(<li className="h6"><i data-feather="gift" className="fea icon-sm text-warning me-3"></i><span className="text-muted">D.O.B. :</span> {data.personal.birthdate}</li>):(<></>)}
                            {data.personal.address?(<li className="h6"><i data-feather="home" className="fea icon-sm text-warning me-3"></i><span className="text-muted">Address :</span> {data.personal.address}</li>):(<></>)}
                            {data.personal.city?(<li className="h6"><i data-feather="map-pin" className="fea icon-sm text-warning me-3"></i><span className="text-muted">City :</span> {data.personal.city}</li>):(<></>)}
                            {data.personal.country?(<li className="h6"><i data-feather="globe" className="fea icon-sm text-warning me-3"></i><span className="text-muted">Country :</span> {data.personal.country}</li>):(<></>)}
                            {data.personal.postal?(<li className="h6"><i data-feather="server" className="fea icon-sm text-warning me-3"></i><span className="text-muted">Postal Code :</span> {data.personal.postal}</li>):(<></>)}
                            {data.personal.email?(<li className="h6"><i data-feather="mail" className="fea icon-sm text-warning me-3"></i><span className="text-muted">Email :</span> {data.personal.email}</li>):(<></>)}
                            {data.personal.mobile?(<li className="h6"><i data-feather="phone" className="fea icon-sm text-warning me-3"></i><span className="text-muted">Mobile :</span> {data.personal.mobile}</li>):(<></>)}
                        </ul>
                    </div>
        
                    <Navigation></Navigation>
                </div>
            </div>

    <div className="col-lg-8 col-12">
        <Switch>
            <Route exact path='/' component={Profile} />
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/contact-me' component={Contact}/>
            <Route path='/messages' component={Messages}/>
            <Route path='/thank-you' component={ThankYou}/>
            <Route path='/error' component={Error}/>
            <Route path='/terms' component={Terms}/>
            <Route path='/privacy' component={Privacy}/>
        </Switch>
    </div>
    </div>
    </div>
    </section>
    </HashRouter>
);
}

export default Main;