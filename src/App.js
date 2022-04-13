import './App.css';
import { useState } from 'react';
import Info from './components/Info';
import Register from './components/Register';
import Welcome from './components/Welcome';

function App() {

  const WELCOME = 'welcome', REGISTER = 'register', INFO = 'info';
  const [currentScreen, setCurrentScreen] = useState(WELCOME);

  let content = null;

  switch(currentScreen){
    case INFO :
      content = <Info nextScreen={() => setCurrentScreen(REGISTER) }/>
      break;
    case REGISTER :
        content = <Register nextScreen={() => setCurrentScreen(INFO)} />
      break;
    default:
      content = <Welcome nextScreen={() => setCurrentScreen(REGISTER)} />

  }

  return (
    <div className="App">
      <main>
        {content}
      </main>
    </div>
  );
}

export default App;
