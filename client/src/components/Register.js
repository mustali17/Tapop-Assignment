import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Register = () => {

  const [form, setForm] = useState({
    name: "",
    lname:"",
    username: "",
    email: "",
    age:"",
    password: "",
  });
  const [file, setFile] = useState("");

  const history = useNavigate();
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  const setimgfile = (e) => {
    setFile(e.target.files[0])
  }


  const addUserData = async (e) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("photo", file);
    formData.append("fname", form.name);
    formData.append("lname", form.lname);
    formData.append("username", form.username);
    formData.append("email", form.email);
    formData.append("password", form.password);
    formData.append("age", form.age);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }

    const res = await axios.post("/register", formData, config)

    if (res.data.status === 422 || !res.data) {
      console.log("errror")
    } else {
      history("/")
    }
  }

  return (
    <>
      <div className="container mt-3">
        <h1>Signup</h1>

        <Form className='mt-3'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" name='username' onChange={(e) => updateForm({ username: e.target.value })} placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' onChange={(e) => updateForm({ password: e.target.value })} placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>EmailID</Form.Label>
            <Form.Control type="text" name='email' onChange={(e) => updateForm({ email: e.target.value })} placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name='name' onChange={(e) => updateForm({ name: e.target.value })} placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name='lname' onChange={(e) => updateForm({ lname: e.target.value })} placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" name='lname' onChange={(e) => updateForm({ age: e.target.value })} placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Select Your Image</Form.Label>
            <Form.Control type="file" onChange={setimgfile} name='photo' placeholder="" />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={addUserData}>
            Submit
          </Button>
        </Form>
        <ToastContainer />
      </div>
    </>
  )
}

export default Register