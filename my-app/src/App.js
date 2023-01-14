import logo from './logo.svg';
import './App.css';
// import FunctionalGreating from './components/FunctionalGreetings';
import FunctionalGreatingWithProps from './components/FunctionalGreetingsWithProps';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreating /> */}
      <FunctionalGreatingWithProps name = "Ali!" age = "I see you're 27 years old;" greeting = "Nice to meet ya!" />
    </div>
  );
}

export default App;
