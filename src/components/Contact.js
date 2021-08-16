import {saveItemToLocalStorage, startPreloader, startSpinner, stopPreloader, stopSpinner} from "../utils";
import {useState,useEffect} from 'react';
import data from "../data/data.json";
import {messageApi} from "../data/messageApi";
import axios from "axios";
import {MESSAGE_API} from "../utils/globals";
function Contact() {
    let initialContactState = {
        "fullname":"",
        "email":"",
        "subject":"",
        "message":"",
        "ownerFullname":data.personal.fullname,
        "ownerEmail":data.personal.email
    }
    let initialValidState = 1
    let initialStatusState = ""
    const [contact,setContact]=useState(
        {
            "fullname":"",
            "email":"",
            "subject":"",
            "message":"",
            "ownerFullname":data.personal.fullname,
            "ownerEmail":data.personal.email
        }
    );
    //const [fullname,setFullname]=useState("");
    const [valid,setValid]=useState(1);
    const [status,setStatus]=useState("");

    let errors
    let isValid = true
    //Set Menu item once
    saveItemToLocalStorage("contact", "menu-item")

    function handleValidation() {
        //console.log(contact)
        return (contact.fullname!=="" && contact.email!=="" && contact.subject!=="" && contact.message!=="")
    }

    function formSubmit(){
        //reset valid and status state
        setValid(initialValidState)
        setStatus(initialStatusState)
        //validate
        isValid = handleValidation()
        setValid(isValid?1:0)
        if(isValid){
            //GOOD TO GO
            //console.log("GOOD TO GO")
            messageApi(contact, setStatus).then(r => {console.log(r)})
            //Display feedback
        }
        else{
            //SHOW ERROR FEEDBACK
            //console.log("SHOW ERROR FEEDBACK")
        }
    }
    const messageApi = async (contact) =>{
        startSpinner()
        const config = {
            method: 'post',
            url: MESSAGE_API,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: {contact: contact}
        };
        await axios(config)
            .then(function (response) {
                if(response.data!=="" && response.data!==undefined){
                    if(response.data.status==="success"){
                        setStatus("success")
                    }
                    else{
                        setStatus("error")
                    }
                }
                else{
                    setStatus("error")
                }
                setContact(initialContactState)
                stopSpinner()
            })
            .catch(function (error) {
                setStatus("error")
                //setContact(initialContactState)
                stopSpinner()
            });
    }
    return (
        <div className="card shadow rounded border-0">
            <div className="card-body py-5">
                <h4 className="card-title">Get In Touch !</h4>
                <div className="custom-form mt-3">
                    <form>
                        <div id="error-msg" className="mb-0">{valid===1?"":
                            <div className="alert alert-warning error_message">*All fields are required*</div>}
                            {status===""?"":(status==="success")?<div className="alert alert-success success_message">*Your message was successfully sent*</div>:
                                <div className="alert alert-warning error_message">*Something went wrong, please try again.*</div>}</div>
                        <div id="simple-msg"></div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Your Fullname <span
                                        className="text-danger">*</span></label>
                                    <div className="form-icon position-relative">
                                        <i data-feather="user" className="fea icon-sm icons"></i>
                                        <input onChange={(e) => setContact(state => ({ ...state, fullname: e.target.value }))} name="name" id="name" type="text" className="form-control ps-5" placeholder="Name :" value={contact.fullname} defaultValue={contact.fullname}/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Your Email <span
                                        className="text-danger">*</span></label>
                                    <div className="form-icon position-relative">
                                        <i data-feather="mail" className="fea icon-sm icons"></i>
                                        <input onChange={(e) => setContact(state => ({ ...state, email: e.target.value }))} name="email" id="email" type="email" className="form-control ps-5" placeholder="Email :" value={contact.email} defaultValue={contact.email}/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="mb-3">
                                    <label className="form-label">Subject<span className="text-danger">*</span></label>
                                    <div className="form-icon position-relative">
                                        <i data-feather="book" className="fea icon-sm icons"></i>
                                        <input onChange={(e) => setContact(state => ({ ...state, subject: e.target.value }))} name="subject" id="subject" className="form-control ps-5" placeholder="subject :" value={contact.subject} defaultValue={contact.subject} />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="mb-3">
                                    <label className="form-label">Message <span className="text-danger">*</span></label>
                                    <div className="form-icon position-relative">
                                        <i data-feather="message-circle" className="fea icon-sm icons clearfix"></i>
                                        <textarea onChange={(e) => setContact(state => ({ ...state, message: e.target.value }))} name="comments" id="comments" rows="4" className="form-control ps-5" placeholder="Message :" value={contact.message} defaultValue={contact.message}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="d-grid">
                                    <button id="contact-btn" type="button" onClick={formSubmit} className="btn btn-primary">Send
                                        Message <div className="spinner-border text-warning" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;