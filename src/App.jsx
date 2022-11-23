import './App.css'
import {Route, Routes} from 'react-router-dom'

import {Login} from "./Login"
import {Home} from "./Home"

const YourExchanges = () => <h2>Your Exchanges</h2>
const YourResources = () => <h2>Your Resources</h2>

function App()  {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/your-exchanges' element={<YourExchanges />} ></Route>
        <Route path='/your-resources' element={<YourResources />} ></Route>
      </Routes>
    </div>
  )
}
export default App
