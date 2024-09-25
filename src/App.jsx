import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from  './Button.jsx'

function App() {
 const [bgColor, setBgColor] = useState('white');
 function change(color) { 
  setBgColor(color)
 }

 

  return (
    <>
    <div className="screen" style={{backgroundColor: bgColor}} >
    <div className="container" >
      <Button buttonColor="red" changeColor={change}  />
      <Button buttonColor="blue" changeColor={change}  />
      <Button buttonColor="green" changeColor={change}  />
      <Button buttonColor="pink" changeColor={change}  />
      <Button buttonColor="violet" changeColor={change}  />
      <Button buttonColor="lightgrey" changeColor={change}  />
      </div>
    </div>

    
    </>
  )
}

export default App
