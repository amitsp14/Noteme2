import React from 'react'
import {useContext} from 'react';
import noteContext from "../context/notes/noteContext"
import NoteItem from './NoteItem';
import Addnote from './Addnote';


const Notes = () => {
    const context = useContext(noteContext)

    const {notes, addNote} = context
    return (

        <>
        <Addnote/>
        <div className='row'>

            <h2> Your Notes</h2>
            {notes.map((note) => {

                return <NoteItem  note= {note}/>
            })}



        </div>
        </>
    )
}

export default Notes