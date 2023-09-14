import { useState } from "react";
import * as notesAPI from "../../utilities/notes-api";
import './Note.css';

export default function Note({ note, notes, setNotes }) {
  const [visible, setVisible] = useState(false);
  const [editNote, setEditNote] = useState(note.text);
//   const [editNote, setEditNote] = useState([
//     note.text,
//     note.date,
//     note.skiresort,
//     note.country,
// ]);

  // let date = new Date(note.createdAt)
  let date = new Date(note.createdAt)
  // date = date.split('T', 1);


  async function handleDelete() {
    const deleteNote = await notesAPI.deleteNote(note._id);
    setNotes(notes.filter(function(n) {
      return n._id !== deleteNote._id
    }));
  }

  function handleChange(evt) {
    setEditNote(evt.target.value);
  }

  async function handleEdit(evt) {
    setVisible(!visible);
    const updatedNote = await notesAPI.edit(note._id, editNote);
    const updatedNotes = notes.map(n => {
      if (n._id === updatedNote._id) {
        n.text = updatedNote.text
      }
      return n
    })
    setNotes(updatedNotes)
  }

  function handleKeyPress(evt) {
    if (evt.key === 'Enter') {
      handleEdit()
    }
  }

  function toggleInput() {
    setVisible(!visible);
  }
  
  return (
    <div className="note-container">
      <p className="note-date">{date.toLocaleString()} &nbsp;- </p>
      { visible && 
        <div>
       
      <input onKeyDown={handleKeyPress} value={editNote} onChange={handleChange} />

        </div>
      }
      { !visible &&
      <>
      <p className="note-text">&nbsp;&nbsp;{new Date(note.date).toDateString()}</p>
      <p className="note-text">&nbsp;&nbsp;{note.country}</p>
      <p className="note-text">&nbsp;&nbsp;{note.skiresort}</p>
        <p className="note-text">&nbsp;&nbsp;{note.text}</p>
        <button 
          onClick={toggleInput}
          className="edit-note"
        >
        Edit
        </button>
        <button 
        className="delete-note"
        onClick={handleDelete}
      >
      X
      </button>
      </>
      }
     
    </div>
  );
}