import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Note from "./Components/Note";
import notes from "./Notes";

function App() {
  return (
    <>
      <Header />
      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      <Footer />
    </>
  );
}

export default App;
