import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState([]);

  function addNotes(inputNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, inputNote];
    });
  }

  function deleteNotes(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onChecked={deleteNotes}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
