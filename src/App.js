import logo from './logo.svg';
import './App.css';
import {BasicEditor} from './editor.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <h3>Monaco Editor</h3>
      </header>
      <section>
        <BasicEditor/>
      </section>
    </div>
  );
}

export default App;
