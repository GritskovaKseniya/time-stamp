import './App.css';
import { TimeStamp } from './components/TimeStamp/TimeStamp.tsx';

function valueChanged(date, inputValue) {
  console.log("valueChanged called!");
  return inputValue;
}

function App() {
  return (
    <div className="App">
      <TimeStamp dateFormat={"DD/MM/YYYY hh:mm:ss"} valueChanged={valueChanged} />
    </div>
  );
}

export default App;
