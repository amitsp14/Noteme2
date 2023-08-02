import React, { useState } from 'react'


import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.authtoken);
            console.log('Token stored:', json.authtoken); // Added console log
            props.showAlert("Logged in successfully", "success");
            navigate("/");
        } else {
            props.showAlert("Invalid Credentials", "danger");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const centeredDivStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'

    }

    return (
        <div className='mt-3' style={centeredDivStyle}>
            <form onSubmit={handleSubmit} style={{ width: '60%' }}>
               <div  style={centeredDivStyle}> <h2 style={{marginBottom:"30px"}} >Login to continue to NoteMe </h2></div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                </div>
                <div style={centeredDivStyle}>
                    <button type="submit" style={{ backgroundColor: "black", color: "white", border: "black" }} className="btn btn-primary" >Submit</button></div>
            </form>
        </div>
    )
}

export default Login