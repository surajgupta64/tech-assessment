import { useEffect } from "react"
import "./App.css"
import Pages from "./components/pages/Pages"

function App() {

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify([]))
    localStorage.setItem('cart', JSON.stringify([]))
  }, [])
  return <Pages />
}

export default App
