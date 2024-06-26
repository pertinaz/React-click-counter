import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import {useState} from 'react';
import bootcampLogo from './images/bootcamp-free-font-01.jpg';

function App() {

  const [numClicks, setNumClics] = useState(0);

  const manageClick = () => {
    setNumClics(numClicks + 1);
  }

  const resetCounter = () => {
    setNumClics(0);
  }
  return (
    <div className="App">
      <div className='logo-container'>
        <img 
          className='logo'
          src={bootcampLogo}
          alt='Logo de la web' />
      </div>
      <div className='main-container'>
        <Counter numClics={numClicks} />
        <Button 
          text='Click'
          clickButton={true}
          manageClick={manageClick} />
        <Button 
          text='Reset counter'
          clickButton={false}
          manageClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
