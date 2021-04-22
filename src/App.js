import Visualizer from './Components/Visualizer/Visualizer';
import {AlgorithmProvider} from './context/Algorithm.context';

function App() {
  return (
    <div className="App">
      {/* <AlgorithmProvider> */}
        <Visualizer/>
      {/* </AlgorithmProvider> */}
    </div>
  );
}

export default App;
