import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);

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

  function expand() {
    setIsExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            placeholder="Add Title"
            value={note.title}
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a Note here..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
