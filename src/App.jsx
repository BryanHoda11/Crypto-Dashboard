import Charts from "./components/Charts"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <div className="main-wrapper w-[96%] mx-auto h-screen flex flex-col">
        <Navbar />
        <Charts />
      </div>
    </>
  )
}

export default App
