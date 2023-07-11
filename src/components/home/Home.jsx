import React, { useState } from "react"
import Hero from "./hero/Hero"

const Home = () => {
  const [history, setHistory] = useState([]);

  const addToHistory = (imageUrl) => {
    setHistory([...history, imageUrl]);
    localStorage.setItem('history', JSON.stringify([...JSON?.parse(localStorage.getItem('history')), imageUrl]));
    console.log(localStorage.getItem('history'))
  };

  return (
    <>
      <Hero addToHistory={addToHistory} />
    </>
  )
}

export default Home
