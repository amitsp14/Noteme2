import { useState } from "react";
import noteContext from "./noteContext";

const Notestate = (props) => {

  const notesInitial = [
    {
      "_id": "64216e6026a3e8e4455f331e",
      "user": "642081df6f3fa83fd2c753a8",
      "title": "first note",
      "description": "This  is a first note added in in MERN stack website noteme of the user upman",
      "tag": "personal",
      "date": "2023-03-27T10:22:24.974Z",
      "__v": 0
    },
    {
      "_id": "64230bc6bc3704462a914a15",
      "user": "642081df6f3fa83fd2c753a8",
      "title": "note 3 updated again 22:40",
      "description": "ee eeer  updated",
      "tag": "personal",
      "date": "2023-03-28T15:46:14.639Z",
      "__v": 0
    },
    {
      "_id": "64216e6026a3e8e4455f331e",
      "user": "642081df6f3fa83fd2c753a8",
      "title": "first note",
      "description": "This  is a first note added in in MERN stack website noteme of the user upman",
      "tag": "personal",
      "date": "2023-03-27T10:22:24.974Z",
      "__v": 0
    },
    {
      "_id": "64230bc6bc3704462a914a15",
      "user": "642081df6f3fa83fd2c753a8",
      "title": "note 3 updated again 22:40",
      "description": "ee eeer  updated",
      "tag": "personal",
      "date": "2023-03-28T15:46:14.639Z",
      "__v": 0
    },
    {
      "_id": "64216e6026a3e8e4455f331e",
      "user": "642081df6f3fa83fd2c753a8",
      "title": "first note",
      "description": "This  is a first note added in in MERN stack website noteme of the user upman",
      "tag": "personal",
      "date": "2023-03-27T10:22:24.974Z",
      "__v": 0
    },
    {
      "_id": "64230bc6bc3704462a914a15",
      "user": "642081df6f3fa83fd2c753a8",
      "title": "note 3 updated again 22:40",
      "description": "ee eeer  updated",
      "tag": "personal",
      "date": "2023-03-28T15:46:14.639Z",
      "__v": 0
    }
  ]

  const [notes, setnotes] = useState(notesInitial)

  const addNote = (title, description, tag) => {

    console.log("Adding a new note")
    const note = {
      "_id": "64230bc6bc3704462a914a15",
      "user": "642081df6f3fa83fd2c753a8",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-03-28T15:46:14.639Z",
      "__v": 0
    };
    setnotes(notes.concat(note))


  }

  const editNote = (id, title, description, tag) => {

       

  }

  //deleting a note
  const deleteNote = (id) => {
    console.log("deleted note with id : " + id)

    const newNotes = notes.filter((note) => {  return note._id !==id })
    setnotes(newNotes)

    

  }

  return (



    <noteContext.Provider value={{ notes, addNote, editNote, deleteNote }}>

      {props.children}

    </noteContext.Provider>

  )

}


export default Notestate;