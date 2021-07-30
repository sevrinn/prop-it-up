import './App.css';
import Person from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <Person 
        firstName ={"Jane"}
        lastName ={"Doe"}
        age={45}
        hairColor={"Black"} />

      <Person 
        firstName ={"Jon"}
        lastName ={"Smith"}
        age={88}
        hairColor={"Brown"} />

      <Person 
        firstName ={"Millard"}
        lastName ={"Fillmore"}
        age={50}
        hairColor={"Brown"} />

      <Person 
        firstName ={"Maria"}
        lastName ={"Smith"}
        age={62}
        hairColor={"Brown"} />
    </div>

    
  );
}

export default App;

/**
 * Code Breakdown
 * 1. imports the css file holding all the styles
 * 2. imports Person component from the PersonCard.js
 * 
 * 5. This app returns a div containing 4 Person components, each passing different information in as props.
 * 
 * 36. exports App
 * 
 * It's important to note that a reference to App is placed in the ReactDOM.render
 * api method in the index.js file where it's rendered in the root div on the index.html
 */