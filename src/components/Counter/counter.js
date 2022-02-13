import { useState } from 'react/cjs/react.development';
import './counter.css';

function App() {
const [counter, setCounter] = useState(0);


  return (
    <>
		<h1>
			This is a counter app
		</h1>
		<div id='counter-value'>
			{counter}
		</div>
		<div className='btn-container'>
			<button id='increment-btn' onClick={() => setCounter(counter + 1)}>Increment</button>
			<button id='decrement-btn' onClick={() => counter === 0 ? '' : setCounter(counter - 1)}>Decrement</button>
		</div>
    </>
  );
}

export default App;
