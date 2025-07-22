import Charts from "./components/Charts"
import Navbar from "./components/Navbar"
import CoinPage from "./components/CoinPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="main-wrapper w-[98%] mx-auto h-screen flex flex-col">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Charts />} />
            <Route path="/coin/:id" element={<CoinPage />} />
          </Routes>
          {/* </div> */}
        </Router>
      </div>
    </>
  )
}

export default App
