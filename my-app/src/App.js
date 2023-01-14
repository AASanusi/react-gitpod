import logo from './logo.svg';
import './App.css';
// import FunctionalGreating from './components/FunctionalGreetings';
import FunctionalGreatingWithProps from './components/FunctionalGreetingsWithProps';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreating /> */}
      <FunctionalGreatingWithProps />
    </div>
  );
}

export default App;
