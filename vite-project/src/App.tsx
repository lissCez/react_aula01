import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <a href='/react.svg' target='_blank'><img src={reactLogo} ></img></a>
            <a href='/vite.svg' target='_blank'><img src={viteLogo} ></img></a>
            <h1>Vite + React</h1>
            <div className='card'>
                <button onClick={() => setCount((contagem) => contagem + 1)}>
                    A contagem de clicks está em: {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code>
                </p>
            </div>
            <p className='read-the-docs'>
                Click on the Vite and React logos to learn more
            </p>
        </div>
    </>
  )
}

export default App
