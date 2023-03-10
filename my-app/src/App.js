// import logo from './logo.svg';
import './App.css';
// import FunctionalGreating from './components/FunctionalGreetings';
// import FunctionalGreatingWithProps from './components/FunctionalGreetingsWithProps';
// import StatefulGreetings from './components/StatefulGreetings';
// import StatefulGreetingsWithCallback from './components/StatefulGreetingsWithCallback';
import StatefulGreetingsWithPrevState from './components/StatefulGreetingsWithPrevState';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreating /> */}
      {/* <FunctionalGreatingWithProps name = "Ali!" age = "I see you're 27 years old;" greeting = "Nice to meet ya!" /> */}
      {/* <StatefulGreetings greeting = "I'm a stateful class component" name = "Ali" /> */}
      {/* <StatefulGreetingsWithCallback/> */}
      <StatefulGreetingsWithPrevState/>
    </div>
  );
}

export default App;
