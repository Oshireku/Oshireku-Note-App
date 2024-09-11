import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Zoom from "@mui/material/Zoom";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [formActive, setFormActive] = useState(false);

  function handleChange(event) {
    const triggerName = event.target.name;
    const triggerValue = event.target.value;

    setNote((prevValue) => {
      return { ...prevValue, [triggerName]: triggerValue };
    });
  }

  function handleClick() {
    setFormActive(true);
  }

  return (
    <div>
      <form onClick={handleClick}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        {formActive ? (
          <div>
            <textarea
              name="content"
              placeholder="Take a note..."
              rows="3"
              onChange={handleChange}
              value={note.content}
            />
            <Zoom in={true}>
              <button
                onClick={(event) => {
                  {
                    note.title && note.content !== ""
                      ? props.onAdd(note)
                      : alert("Note must have a title and a content");
                  }

                  setNote({
                    title: "",
                    content: "",
                  });
                  event.preventDefault();
                }}
              >
                <AddCircleIcon />
              </button>
            </Zoom>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default CreateArea;
