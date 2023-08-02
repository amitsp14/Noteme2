import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
        props.showAlert("Note added successfully", "success")

    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    const centeredDivStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
     
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
        
    }
   
  
    return (
        
        
        <div className="container my-3"  style={ centeredDivStyle }>
            <form className="my-3" style={ {width :"60%"}} >
            <h2  style={ centeredDivStyle } >Add a Note</h2>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title"  value={note.title} aria-describedby="emailHelp" onChange={onChange} minLength={5}  /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="description"  value={note.description}onChange={onChange} minLength={5}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5}  />
                </div>
               <div style={ centeredDivStyle }>
                <button disabled={note.title.length<5 || note.description.length<5 } type="submit" className="btn" style={{ backgroundColor: "black", color: "white", border: "black", marginTop:"20px", marginBottom :"30px" }} onClick={handleClick}>Submit</button></div>
            </form>
        </div>
    )
}

export default AddNote