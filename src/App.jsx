
import './App.css'
import './reset.css'
import Counter from './Components/counter'
import Counter1 from './Components/counter1'
import Download_2botones from './Components/download_2botones'
import TextAbovButDownL from './Atomos/text_above_but_downl'


function App() {

  return (
    <>
      <div className='page-1'>
        <h1 className='header'>Mobile App Landing Page</h1>
        <TextAbovButDownL />
        <Download_2botones />
        <img className='header-iphone' src="public/Pics/header-iphone.png" alt="Pic header-iphone" />
        <Counter1/>
        <Counter/>
      </div>
    </>
  )
}

export default App
