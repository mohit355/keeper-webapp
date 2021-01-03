import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes.js";

const App = () => {
  return (
    <div>
      <Header />
      {notes.map((data) => (
        <Note key={data.key} title={data.title} content={data.content} />
      ))}
      <Footer />
    </div>
  );
};

export default App;
