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
        title: "Royal",
        album: "Royal",
        img: "https://images.genius.com/762fdea5c6d6e696ef5b3f44bb48ab5c.700x700x1.jpg",
        artist: "Goose",
      },
      {
        title: "Rasputin",
        album: "Nightflight To Venus",
        img: "https://images.genius.com/317590ff41c2b171d26c58796cf1f7e1.1000x1000x1.png",
        artist: "Boney M.",
      },
      {
        title: "Burn The House Down",
        album: "The Click (Deluxe Edition)",
        img: "https://images.genius.com/6a3dcd3935f2e9bdf8db0610806620bf.1000x1000x1.jpg",
        artist: "AJR",
      },
      {
        title: "Paul Revere",
        album: "Stick Season",
        img: "https://i.scdn.co/image/ab67616d0000b27365a472d8326d4571bf725422",
        artist: "Noah Kahan",
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
        {/* <MusicDisplay title="New Music:" songs={songData} /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
