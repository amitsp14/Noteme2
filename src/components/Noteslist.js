import React from 'react';
import NoteItem from './NoteItem';

const NotesList = ({ notes }) => {
  if (!notes || notes.length === 0) {
    // Handle the case when notes are not available or empty
    return <div>No notes found.</div>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {notes.map((note) => (
        <NoteItem key={note._id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;