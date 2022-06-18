import React, { useState } from "react";
import CreateArea from "./CreateArea.jsx";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((oldNotes) => {
      return [...oldNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((oldNotes) => {
      return oldNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <Header />
      <CreateArea onAddNote={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
