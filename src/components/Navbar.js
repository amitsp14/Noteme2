import React from 'react'
import { Link , useLocation }  from "react-router-dom";
// import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const Navbar = () => {
    let location = useLocation();
    const navigate = useNavigate();


   const handleLogout=()=>{
 
     localStorage.removeItem('token');
     navigate("/login");

  }
  const centeredDivStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'

}
      
    return (
        <div>

            <nav className="navbar navbar-expand-lg p-3 mb-2 " style={{ backgroundColor : '#b7ffe4', color : "black"}} >
                <div className="container-fluid">
                    <Link className="navbar-brand mb-0 h1 " style={{fontSize :"30px"}}  to="/">NoteMe</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link className={`nav-link ${location.pathname==="/"}` } style={{color :"black",marginInline :"30px", fontSize :"18px",marginTop:"4px", fontWeight :"400"}}  aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/about"}` } style={{marginInline :"30px",marginTop:"5px", fontSize :"18px" ,color :"black",  fontWeight :"400"}} to="/about">About</Link>
                            </li>
                 
                           
                           
                        </ul>
                        {!localStorage.getItem('token')?<form className="d-flex " >
                                <Link className="btn btn-primary mx-2"  style={{ backgroundColor: "black" , color:"white", border :"black"}} to = "/login" role="button">Login</Link>
                                <Link className="btn btn-primary" style={{ backgroundColor: "black" , color:"white", border :"black"}} to = "/signup"role="button">Signup</Link>
                        </form>:  <button onClick={handleLogout} className="btn btn-primary" style={{ backgroundColor: "black" , color:"white", border :"black"}} to>Logout</button>}


                        
                    </div>
                </div>
              
            </nav>

        </div>

        
    )
}


export default Navbar
