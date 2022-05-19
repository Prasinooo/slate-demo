import logo from './logo.svg';
import './App.css';
import RichTextExample from './Editor/examples/richtext.tsx';
import ImagesExample from './Editor/examples/images.tsx';
import TablesExample from './Editor/examples/tables.tsx';

function App() {
  return (
    <div className="App">
      <RichTextExample />

      <ImagesExample />

      <TablesExample />
    </div>
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>
  );
}

export default App;
