import { useState, useEffect } from "react";
import * as notesAPI from '../../utilities/notes-api';
import AddNoteForm from "../../components/AddNoteForm/AddNoteForm";
import ListOfNotes from "../../components/ListOfNotes/ListOfNotes";

export default function NotesPage() {
  const [notes, setNotes] = useState([]);


  useEffect(function() {
    async function getNotes() {
      const notes = await notesAPI.index();
      setNotes(notes);
    }
    getNotes()
  }, []);



  return (
    <div className="note-pge-container">
      <AddNoteForm notes={notes} setNotes={setNotes}  />
      {
        notes.length !== 0 ? 
        <div className="note-ouput-container">
          <h2>My Notes</h2>
          <ListOfNotes notes={notes} setNotes={setNotes} />
        </div>
        :
        <h2>No Notes Yet!</h2>
      }
    </div>
  );
}