import { useState } from 'react' 
import Transition from '@Demo/Transition/Transition'
import Deffered from '@Demo/DeferredValue/Deffered'
import Theme from './Theme'
import './App.css'


function App() {
  const [theme, setTheme] = useState(false)
  return (
    <Theme theme={theme}>
      <button 
      onClick={() => setTheme(!theme)}
      type="button">
        Toggle Theme
      </button>
    <div className='container'>
      <div>
        <Transition />
      </div>
      <div>
        <Deffered/>
      </div>
    </div>
    </Theme>
  )
}




export default App
