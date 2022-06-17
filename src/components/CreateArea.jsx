import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((oldNote) => {
      return {
        ...oldNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAddNote(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Add Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a Note here..."
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
