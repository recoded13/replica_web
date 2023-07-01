import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './reset.css'
import MolecHappyUsers from './Moleculas/molec_HappyUsers'
import MolecIssuesSolved from './Moleculas/molec_IssuesSolved'
import MolecGoodReviews from './Moleculas/molec_GoodReviews'
import MolecCaseStudies from './Moleculas/molec_CaseStudies'
import MolecOrdersReceived from './Moleculas/molec_ordersreceived'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='counter'>
        <MolecHappyUsers />
        <MolecIssuesSolved />
        <MolecGoodReviews />
        <MolecCaseStudies />
        <MolecOrdersReceived/>
      </div>
      <br /><br /><br /><br /><br />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
