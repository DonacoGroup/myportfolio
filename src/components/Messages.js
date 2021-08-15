function Messages(){
    return (
        <div className="rounded shadow p-4">
        <div className="d-flex align-items-center justify-content-between">
        <h5 className="mb-0">Messages:</h5>
    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#composemail" className="btn btn-primary"><i data-feather="plus" className="fea icon-sm"></i> Compose</a>
    </div>

    <div className="modal fade" id="composemail" tabindex="-1" aria-labelledby="composemail-title" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content rounded shadow border-0">
        <div className="modal-header border-bottom">
        <h5 className="modal-title" id="composemail-title">Branded T-Shirts</h5>
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body p-4">
        <form>
        <div className="row">
        <div className="col-12">
        <div className="mb-3">
        <label className="form-label">Your Name <span className="text-danger">*</span></label>
    <div className="form-icon position-relative">
        <i data-feather="user" className="fea icon-sm icons"></i>
        <input name="name" id="name" type="text" className="form-control ps-5" placeholder="First Name :"/>
        </div>
        </div>
        </div>
        <div className="col-12">
        <div className="mb-3">
        <label className="form-label">Subject</label>
        <div className="form-icon position-relative">
        <i data-feather="book" className="fea icon-sm icons"></i>
        <input name="subject" id="subject" className="form-control ps-5" placeholder="Your subject :"/>
        </div>
        </div>                                                                               
        </div>
        <div className="col-12">
        <div id="editor"><p>Hello,<br /><br/> Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation. <br/><br/>Thank you</p></div>
    </div>
    </div>
    </form>
    </div>
    <div className="border-top p-4">
        <button type="button" className="btn btn-primary">Send Now</button>
    </div>
    </div>
    </div>
    </div>

    <div className="d-flex border-bottom align-items-center justify-content-between bg-light mt-4 p-3">
        <div className="form-check ps-0">
        <div className="mb-0">
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="selectall" />
        <label className="form-check-label" for="selectall">Select all</label>
    </div>
    </div>
    </div>

    <div className="btn-group dropdown-primary me-2 mt-2">
        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Action
        </button>
        <div className="dropdown-menu">
        <a href="javascript:void(0)" className="dropdown-item"><i data-feather="eye-off" className="fea icon-sm"></i> Mark Unread</a>
    <a href="javascript:void(0)" className="dropdown-item"><i data-feather="corner-up-left" className="fea icon-sm"></i> Reply</a>
    <a href="javascript:void(0)" className="dropdown-item"><i data-feather="corner-up-right" className="fea icon-sm"></i> Forward</a>
    <div className="dropdown-divider"></div>
        <a href="javascript:void(0)" className="dropdown-item text-danger"><i data-feather="trash-2" className="fea icon-sm"></i> Delete</a>
    </div>
    </div>
    </div> 

    <div className="d-flex border-bottom p-3">
        <div className="form-check ps-0">
        <div className="mb-0">
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="mail1"/>
        <label className="form-check-label" for="mail1"></label>
        </div>
        </div>
        </div>
        <a href="javascript:void(0)">
        <div className="d-flex ms-2">
        <img src="images/client/01.jpg" className="avatar avatar-md-sm rounded-pill shadow" alt=""/>
        <div className="flex-1 ms-3">
        <h6 className="text-dark">Calvin Carlo</h6>
    <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy</p>
    </div>
    </div>
    </a>
    </div> 

    <div className="d-flex border-bottom bg-light p-3">
        <div className="form-check ps-0">
        <div className="mb-0">
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="mail2"/>
        <label className="form-check-label" for="mail2"></label>
        </div>
        </div>
        </div>
        <a href="javascript:void(0)">
        <div className="d-flex ms-2">
        <img src="images/client/02.jpg" className="avatar avatar-md-sm rounded-pill shadow" alt=""/>
        <div className="flex-1 ms-3">
        <h6 className="text-dark">Miriam Walya</h6>
    <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy</p>
    </div>
    </div>
    </a>
    </div> 

    <div className="d-flex border-bottom p-3">
        <div className="form-check ps-0">
        <div className="mb-0">
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="mail3"/>
        <label className="form-check-label" for="mail3"></label>
        </div>
        </div>
        </div>
        <a href="javascript:void(0)">
        <div className="d-flex ms-2">
        <img src="images/client/03.jpg" className="avatar avatar-md-sm rounded-pill shadow" alt=""/>
        <div className="flex-1 ms-3">
        <h6 className="text-dark">Jenelia Parker</h6>
    <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy</p>
    </div>
    </div>
    </a>
    </div> 

    <div className="d-flex border-bottom bg-light p-3">
        <div className="form-check ps-0">
        <div className="mb-0">
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="mail4"/>
        <label className="form-check-label" for="mail4"></label>
        </div>
        </div>
        </div>
        <a href="javascript:void(0)">
        <div className="d-flex ms-2">
        <img src="images/client/04.jpg" className="avatar avatar-md-sm rounded-pill shadow" alt=""/>
        <div className="flex-1 ms-3">
        <h6 className="text-dark">Jack Deo</h6>
    <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy</p>
    </div>
    </div>
    </a>
    </div> 

    <div className="d-flex border-bottom p-3">
        <div className="form-check ps-0">
        <div className="mb-0">
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="mail5"/>
        <label className="form-check-label" for="mail5"></label>
        </div>
        </div>
        </div>
        <a href="javascript:void(0)">
        <div className="d-flex ms-2">
        <img src="images/client/05.jpg" className="avatar avatar-md-sm rounded-pill shadow" alt=""/>
        <div className="flex-1 ms-3">
        <h6 className="text-dark">Marya Joseph</h6>
    <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy</p>
    </div>
    </div>
    </a>
    </div> 

    <div className="d-flex border-bottom bg-light p-3">
        <div className="form-check ps-0">
        <div className="mb-0">
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="mail6"/>
        <label className="form-check-label" for="mail6"></label>
        </div>
        </div>
        </div>
        <a href="javascript:void(0)">
        <div className="d-flex ms-2">
        <img src="images/client/06.jpg" className="avatar avatar-md-sm rounded-pill shadow" alt=""/>
        <div className="flex-1 ms-3">
        <h6 className="text-dark">Maninder Khan</h6>
    <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy</p>
    </div>
    </div>
    </a>
    </div> 

    <div className="d-flex border-bottom p-3">
        <div className="form-check ps-0">
        <div className="mb-0">
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="mail7"/>
        <label className="form-check-label" for="mail7"></label>
        </div>
        </div>
        </div>
        <a href="javascript:void(0)">
        <div className="d-flex ms-2">
        <img src="images/client/07.jpg" className="avatar avatar-md-sm rounded-pill shadow" alt=""/>
        <div className="flex-1 ms-3">
        <h6 className="text-dark">Pitambar Das</h6>
    <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy</p>
    </div>
    </div>
    </a>
    </div> 

    <div className="d-flex border-bottom bg-light p-3">
        <div className="form-check ps-0">
        <div className="mb-0">
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="mail8"/>
        <label className="form-check-label" for="mail8"></label>
        </div>
        </div>
        </div>
        <a href="javascript:void(0)">
        <div className="d-flex ms-2">
        <img src="images/client/08.jpg" className="avatar avatar-md-sm rounded-pill shadow" alt=""/>
        <div className="flex-1 ms-3">
        <h6 className="text-dark">Cristino Murfy</h6>
    <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy</p>
    </div>
    </div>
    </a>
    </div>

    <div className="d-flex align-items-center justify-content-between mt-4">
        <span className="text-muted h6 mb-0">Showing 8 out of 33</span>
    <a href="javascript:void(0)" className="btn btn-primary">See more</a>
    </div>
    </div>
    );
}
export default Messages;