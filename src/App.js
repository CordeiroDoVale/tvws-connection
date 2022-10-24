import './App.css'
import './index.css'
import {Route, Routes} from "react-router-dom"
import  Home  from "./Pages/Home"
import Channels from "./Pages/Channels"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/channels" element={<Channels />}/>
    </Routes>
  );
}

export default App;
