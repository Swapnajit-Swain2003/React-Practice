// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  // let myObj = {
  //   username: "Swapnajit",
  //   age: 21
  // }
  // let newArr = [1, 2, 3]
  return (
    <>
      <h1 className='bg-blue-950  p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Chai Aur Code" btnText="Click Me" />
      {/* <Card channel="Chai Aur Code" someObj={myObj} someObje={newArr} /> */}
    </>
  )
}

export default App
