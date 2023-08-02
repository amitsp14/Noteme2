import React from 'react';
import { useContext } from 'react';
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  const cardStyle = {
    margin: '1rem', // Use rem for margin
    padding: '1rem', // Use rem for padding
    background: 'white',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '1.2rem', // Use rem for font size
    fontWeight: 'bold',
    marginBottom: '0.5rem', // Use rem for margin
  };

  const descriptionStyle = {
    fontSize: '1rem', // Use rem for font size
  };

  return (
    <div style={cardStyle}>
      <div className="card-body">
        <h5 className="card-title" style={titleStyle}>
          {note.title}
        </h5>
        <p className="card-text" style={descriptionStyle}>
          {note.description}
        </p>
        <i
          className="fa-solid fa-trash"
          onClick={async () => {
            await deleteNote(note._id);
            props.showAlert("Note deleted successfully", "success");
          }}
        ></i>
        <i
          className="fa-solid fa-pen-to-square mx-4 my-3"
          onClick={() => {
            updateNote(note);
          }}
        ></i>
      </div>
    </div>
  );
};

export default NoteItem;
