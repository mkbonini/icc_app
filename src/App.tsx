import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WeatherWidget from './components/WeatherWidget'
import AddressForm from './components/AddressForm'
import './App.css'

interface Weather {

}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <WeatherWidget/> */}
      <AddressForm></AddressForm>
    </div>
  )
}

export default App
