import { useEffect, useState } from 'react'
import './App.css'
import Redgate from './components/molecules/redgate'

function App() {

  const [foodData, setFoodData] = useState<{ name: string, description: string, logo: string, free: boolean}[] >(
    []
  )

  useEffect(() => {
    // Fetch the food.json data
    //fetch('/src/food.json')
    fetch('./data.json')
      .then(response => response.json())
      .then(data => setFoodData(data))
      .then(console.log)
  }, [])

  return (
    <>
      <Redgate products={foodData}/>
    </>
  )
}

export default App
