import {useEffect, useState} from "react";
import data from "../data/data.json";
function Hero() {

    return (
        <section className="bg-profile d-table w-100 bg-primary">
        <div className="container">
        <div className="row">
        <div className="col-lg-12">
        <div className="card public-profile border-0 rounded shadow" style={{zIndex: 1}}>
        <div className="card-body">
        <div className="row align-items-center">
        <div className="col-lg-2 col-md-3 text-md-start text-center">
        <img src={"uploads/avatar/"+data.personal.photo} className="avatar avatar-large rounded-circle shadow d-block mx-auto" alt="" />
        </div>

        <div className="col-lg-10 col-md-9">
        <div className="row align-items-end">
        <div className="col-md-7 text-md-start text-center mt-4 mt-sm-0">
        <h3 className="title mb-0">{data.personal.fullname}</h3>
    <small className="text-muted h6 me-2">{data.personal.title}</small>
    <ul className="list-unstyled social-icon mb-0 mt-4">
        {data.personal.facebook?(<li className="list-inline-item mx-1"><a href={data.personal.facebook} className="rounded"><i data-feather="facebook" className="fea icon-sm fea-social"></i></a></li>):(<></>)}
        {data.personal.instagram?(<li className="list-inline-item mx-1"><a href={data.personal.instagram} className="rounded"><i data-feather="instagram" className="fea icon-sm fea-social"></i></a></li>):(<></>)}
        {data.personal.twitter?(<li className="list-inline-item mx-1"><a href={data.personal.twitter} className="rounded"><i data-feather="twitter" className="fea icon-sm fea-social"></i></a></li>):(<></>)}
        {data.personal.linkedin?(<li className="list-inline-item mx-1"><a href={data.personal.linkedin} className="rounded"><i data-feather="linkedin" className="fea icon-sm fea-social"></i></a></li>):(<></>)}
        {data.personal.github?(<li className="list-inline-item mx-1"><a href={data.personal.github}className="rounded"><i data-feather="github" className="fea icon-sm fea-social"></i></a></li>):(<></>)}
        {data.personal.youtube?(<li className="list-inline-item mx-1"><a href={data.personal.youtube} className="rounded"><i data-feather="youtube" className="fea icon-sm fea-social"></i></a></li>):(<></>)}
        {data.personal.gitlab?(<li className="list-inline-item mx-1"><a href={data.personal.gitlab} className="rounded"><i data-feather="gitlab" className="fea icon-sm fea-social"></i></a></li>):(<></>)}
    </ul>
    <ul className="list-inline mb-0 mt-3 d-none">
        <li className="list-inline-item me-2"><a href="javascript:void(0)" className="text-muted" title="Instagram"><i data-feather="instagram" className="fea icon-sm me-2"></i>krista_joseph</a></li>
    <li className="list-inline-item"><a href="javascript:void(0)" className="text-muted" title="Linkedin"><i data-feather="linkedin" className="fea icon-sm me-2"></i>Krista Joseph</a></li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>

);
}

export default Hero;