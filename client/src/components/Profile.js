import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import QRCode from "react-qr-code";







export default function Profile() {
  const params = useParams();
 
var userID=params.id;


  const navigate=useNavigate();
  const [form, setForm] = useState({
    name:"",
    lname:"",
    username:"",
    email:"",
    password:"",
    imgpath:"",
    userID:userID,
  });

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/${userID}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        
      })
      // .then(res=>res.json())
      // .then(data=>{
      //  if(data.error){
      //    toast.error(data.error)
      //    navigate("/signin");
      //  }
      // })
  
      if (!response.ok) {
        toast.error("You must be logged in!")
        navigate("/signin");
        return;
      }
  
      const record = await response.json();
     
  
      setForm(record);
    }
    
    fetchData();
  
    return;
  }, [params.id, navigate]);



  return (
    <>
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src={`/uploads/${form.imgpath}`}
                alt=""
              />
              <span className="font-weight-bold">{form.username}</span>
              <span className="text-black-50">{form.email}</span>
              <span> </span>
            </div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    value={form.fname}
                    onChange={(e) => updateForm({ name: e.target.value })}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={form.lname}
                    onChange={(e) => updateForm({ lname: e.target.value })}
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter phone number"
                    value={form.username}
                    onChange={(e) => updateForm({ phone: e.target.value })}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Email ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter email id"
                    onChange={(e) => updateForm({ email: e.target.value })}
                    value={form.email}
                  />
                </div>
              </div>
              
              <div className="mt-5 text-center">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Share Profile
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Share Profile</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={`http://localhost:3000/profile/${userID}`}
    viewBox={`0 0 256 256`}
    />
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Share</button>
      </div>
    </div>
  </div>
</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

