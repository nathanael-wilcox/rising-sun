// import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MusicDisplay from "./components/MusicDisplay";
import "./css/App.css";

function App() {
  const songData = {
    forYou: [
      {
        title: "Range Rover",
        album: "Range Rover",
        img: "https://images.genius.com/7c7d0776a960e395c0bcebade3a25ed8.600x600x1.webp",
        artist: "Ben Rector",
      },
      {
        title: "Range Rover",
        album: "Range Rover",
        img: "https://images.genius.com/7c7d0776a960e395c0bcebade3a25ed8.600x600x1.webp",
        artist: "Ben Rector",
      },
    ],
  };
  const name = "Nathanael";
  return (
    <>
      <Navbar />
      <main className="main">
        <h4 className="greeting">Hello, {name}!</h4>
        <MusicDisplay title="For You:" songs={songData} />
      </main>
      <Footer />
    </>
  );
}

export default App;
