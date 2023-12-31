// Notes.js
import React, { useEffect, useRef, useState, useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import Addnote from './Addnote';
import { useNavigate } from 'react-router-dom';
import NoteItem from './NoteItem';

const Notes = (props) => {
    const context = useContext(noteContext);
    const Navigate = useNavigate();

    const { notes, getNotes, editNote } = context;

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        }
        else { Navigate("/login"); }


        // eslint-disable-next-line
    }, []);

    const ref = useRef(null);
    const refClose = useRef(null);
    const [note, setNote] = useState({ id: '', etitle: '', edescription: '', etag: '' });

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({
            id: currentNote._id,
            etitle: currentNote.title,
            edescription: currentNote.description,
            etag: currentNote.tag,
        });
    };

    const handleClick = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
        props.showAlert('Note updated successfully', 'success');
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };
    const centeredDivStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'

    };

    return (
        <>
            <Addnote showAlert={props.showAlert} />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" style={{ backgroundColor: "#B7FFE4", color: "black" }}>
                        <div className="modal-header" style={{ backgroundColor: "#B7FFE4", color: "black" }}>
                            <h5 className="modal-title" id="exampleModalLabel">
                                Edit Note
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" >
                            <form className="my-3">
                                {/* <div className="mb-3">
                                    <label htmlFor="title" className="form-label">
                                        Title
                                    </label>
                                    <input type="text" style={{ height: "50px", border: "1px solid grey" }} className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} />
                                </div> */}


                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">
                                        Title
                                    </label>
                                    <textarea
                                        style={{ height: "40px", border: "1px solid grey" }}
                                        className="form-control"
                                        id="etitle"
                                        name="etitle"
                                        value={note.etitle}
                                        onChange={onChange}
                                        minLength={5}
                                    />
                                </div>


                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">
                                        Description
                                    </label>
                                    <textarea
                                        style={{ height: "130px", border: "1px solid grey" }}
                                        className="form-control"
                                        id="edescription"
                                        name="edescription"
                                        value={note.edescription}
                                        onChange={onChange}
                                        minLength={5}
                                        placeholder="Enter your description..."
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">
                                        Tag
                                    </label>
                                    <input type="text" style={{ border: "1px solid grey" }} className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} minLength={5} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5} style={{ backgroundColor: "black", color: "white", border: "black" }} onClick={handleClick} type="button" className="btn btn-primary">
                                Update Note
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h2 style={centeredDivStyle}>Your Notes</h2>
                <div className="container mx-3 my-3">{notes.length === 0 && 'No Notes to display'}</div>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />;
                })}
            </div>
        </>
    );
};

export default Notes;
