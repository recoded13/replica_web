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
import Counter from './Components/counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Counter/>
      </div>
    </>
  )
}

export default App
