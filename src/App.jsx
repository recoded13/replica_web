
import './App.css'
import './reset.css'
import Counter from './Components/counter'
import Counter1 from './Components/counter1'
import Download_2botones from './Components/download_2botones'
import TextAbovButDownL from './Atomos/text_above_but_downl'
import TextAbovButDownL2 from './Atomos/text_above_but_downl2'


function App() {

  return (
    <>
      <div className='page-1'>
        <h1 className='header'>Mobile App Landing Page</h1>
        <TextAbovButDownL />
        <Download_2botones />
        <img className='header-iphone' src="/Pics/header-iphone.png" alt="Pic header-iphone" />
        <Counter1/>
      </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      <div className='page-4'>
        <Counter/>
        <img className='download-iphone' src="/Pics/download-iphone.png" alt="Pic download-iphone" />
        <TextAbovButDownL2 />
        <Download_2botones />
      </div>
    </>
  )
}

export default App
