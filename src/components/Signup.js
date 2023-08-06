import React, { useState } from 'react'


import { useNavigate } from 'react-router-dom';


const Signup = (props) => {

  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  let navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password === credentials.cpassword) {
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        localStorage.setItem('token', json.authtoken)
        props.showAlert("Account Created Successfully", "success")
        navigate("/");
      }
      else {
        props.showAlert("Email Already exists !!! Try with Signing up", "danger")
      }

    }
    else {
      props.showAlert("Confirm Password does not match", "danger")
    }
  }
  const onChange = (e) => {

    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

        <form onSubmit={handleSubmit} >
          <h2  style={{ marginBottom :"20px"}}>Create your account to continue to NoteMe</h2>
          <div className="mb-3">
            <label for="name" className="form-label">Name</label>
            <input type="text" style={{  width: "500px",border: "1px solid grey" }} className="form-control" name="name" onChange={onChange} id="name" aria-describedby="emailHelp" />
          </div>

          <div className="mb-3">
            <label for="email" className="form-label">Email address</label>
            <input type="email"  style={{  width: "450px", border: "1px solid grey" }}className="form-control" name="email" onChange={onChange} id="email" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label for="password" className="form-label">Password</label>
            <input type="password"style={{ width: "300px", border: "1px solid grey" }} className="form-control" name="password" onChange={onChange} minLength={5} required id="password" />
          </div>

          <div className="mb-3">
            <label for="cpassword" className="form-label">Confirm password</label>
            <input type="password" style={{ width: "300px", border: "1px solid grey" }} className="form-control" name="cpassword" onChange={onChange} minLength={5} required id="cpassword" />
          </div>

          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >

            <button type="submit" className="btn btn-primary" style={{ marginTop :"30px" , backgroundColor: "black", color: "white", border: "black" }} >Create Account</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup