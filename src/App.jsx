import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import Characters from './componets/Characters'
import ResidentInfo from './componets/ResidentInfo'

function App() {
  const [isChartacters, setIsChartacters] = useState([])

  useEffect(() => {
    const randomId = Math.floor(Math.random () * 20) +1
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
    .then(res => setIsChartacters(res.data))
  },[])

  console.log(isChartacters)

  return (
    <>
    <div class="banner"></div>
    <div className="App">
      <h1 className='title'>Rick and Morty</h1>
      <Characters isChartacters={isChartacters} setIsChartacters={setIsChartacters}/>
      <ul className='container'>
      {
        isChartacters.residents?.map((residents) => (
          <ResidentInfo residents={residents} key={residents} />
        ))
      }
      </ul>
    </div>
    </>
  )
}

export default App
