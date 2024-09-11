import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notesToDisplay, setNotesToDisplay] = useState([]);

  function addToNotesToDisplayArray(note) {
    setNotesToDisplay((prevValue) => {
      return [...prevValue, note];
    });
  }

  function removeNotesFromNotesToDisplayArray(id) {
    setNotesToDisplay(
      notesToDisplay.filter((noteItem, index) => {
        return id !== index;
      })
    );
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addToNotesToDisplayArray} />
      {notesToDisplay.map((noteitem, index) => {
        return (
          <Note
            title={noteitem.title}
            content={noteitem.content}
            key={index}
            id={index}
            onDelete={removeNotesFromNotesToDisplayArray}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
