import React, { useState } from "react";
import CreateArea from "./CreateArea.jsx";
import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    // console.log(note);
    setNotes((oldNotes) => {
      return [...oldNotes, newNote];
    });
  }

  function deleteNote(id) {
    // console.log("Delete was triggered");
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
      {/* <Note key={1} title="Note title" data="Note Content" /> */}
      <Footer />
    </>
  );
}

export default App;
