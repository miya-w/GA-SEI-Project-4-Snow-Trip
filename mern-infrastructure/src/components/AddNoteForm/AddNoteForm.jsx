import { useState } from "react";
import * as notesAPI from "../../utilities/notes-api";


export default function AddNoteForm({ notes, setNotes, sortOrder }) {
  const [newNote, setNewNote] = useState({
    date:'',
    country:'',
    skiresort:' ',
    text:'',
  });

  const [error, setError] = useState('');

  function handleChange(evt) {
    setNewNote({ ...newNote, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const note = await notesAPI.create(newNote);
      sortOrder === 'asc' ? setNotes([...notes, note]) : setNotes([note, ...notes]);
      setNewNote('');
    } catch {
      setError('Failed to Add Note - Please Try Again');
    }
  }

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit} >
      
          <label>date</label>
          <input type="date" name="date" value={newNote.date} onChange={handleChange}/>
          <label>Country</label>
          {/* <input type="country" name="country" value={newNote.country} onChange={handleChange}/> */}
          <select name="country" value={newNote.country} onChange={handleChange}>
            <option value="">Select a country</option>
            <option value="Australia">Australia</option>
            <option value="Japan">Japan</option>
          </select>
          {/* <label>Ski Resort</label>
          <input type="skiresort" name="skiresort" value={newNote.skiresort} onChange={handleChange}/> */}
          <label>Ski Resort</label>
            <select name="skiresort" value={newNote.skiresort} onChange={handleChange}>
              <option value="">Select a ski resort</option>
              {newNote.country === 'Australia' && (
                <>
                  <option value="Perisher">Perisher</option>
                  <option value="Thredbo">Thredbo</option>
                  <option value="Falls Creek">Falls Creek</option>
                  <option value="Mt Hotham">Mt.Hotham</option>
                  <option value="Mt Buller">Mt.Buller</option>
                  
                
                </>
              )}
              {newNote.country === 'Japan' && (
                <>
                  <option value="Niseko">Niseko</option>
                  <option value="Furaro">Furaro</option>
                  <option value="Rusutsu">Rusutsu</option>
                  <option value="Kamui Ski Links">Kamui Ski Links</option>
                  <option value="Sapporo Teine">Sapporo Teine</option>
                </>
              )}
</select>

          <label>Text</label>
          <input type="text" name="text" value={newNote.text} onChange={handleChange}/>
          <button className="submit" type="submit">Add Note</button>
        </form>
      </div>
      <p className="error-message">{error}</p>
    </div>
  );
}
