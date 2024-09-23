import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import CreateArea from "./Components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prev) => {
      return [...prev, note];
    });
  }
  return (
    <>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((noteItem, index) => (
        <Note key={index} title={noteItem.title} content={noteItem.content} />
      ))}
      <Footer />
    </>
  );
}

export default App;
