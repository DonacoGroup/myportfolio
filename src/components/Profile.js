import {saveItemToLocalStorage} from "../utils/"
import data from "../data/data.json";
function Profile() {
    //Set Menu item once
    saveItemToLocalStorage("profile", "menu-item")
    return (
        <div className="ms-lg-4">
            <h4>About me :</h4>
            <div dangerouslySetInnerHTML={{__html: data.profile.about}} />



            <h4 className="mt-lg-5 mt-4">Skills :</h4>
            <div className="widget mt-4">

                <div className="tagcloud text-center mt-4">
                    {data.profile.skills.map(skill => <a href="javascript:void(0)" className="rounded">{skill.name}</a>)}


                    <a href="javascript:void(0)" className="badge badge-link bg-success  d-none">Finance</a>
                    <a href="javascript:void(0)" className="badge badge-link bg-warning  d-none">Finance</a>
                    <a href="javascript:void(0)" className="badge badge-link bg-info  d-none">Finance</a>
                    <a href="javascript:void(0)" className="badge badge-link bg-primary  d-none">Finance</a>
                    <a href="javascript:void(0)" className="badge badge-link bg-danger  d-none">Finance</a>
                </div>

            </div>


            <h4 className="mt-lg-5 mt-4">Experience :</h4>
            <div className="row">
                {
                    data.profile.experience.map(experience => <div className="col-lg-12 mt-4 pt-2">
                    <div className="d-flex">
                        <div className={"company-logo text-muted h6 me-"+experience.margin+" text-center"}>
                            <img src={"uploads/company/"+experience.logo}
                                 className="avatar avatar-md-sm mx-auto d-block mb-2" alt=""/>{experience.period}
                        </div>
                        <div className="flex-1">
                            <h5 className="title mb-0">{experience.company}</h5>
                            <div dangerouslySetInnerHTML={{__html: experience.description}} />
                        </div>
                    </div>
                </div>)
                }
            </div>


            <div className="mt-4 pt-2 d-none">
                <a href="javascript:void(0)" className="btn btn-primary me-2"><i
                    className="uil uil-user-check"></i> Request a proposal</a>
                <a href="javascript:void(0)" className="btn btn-outline-primary"><i className="uil uil-print"></i> Print
                    CV</a>
            </div>
        </div>

    );
}

export default Profile;