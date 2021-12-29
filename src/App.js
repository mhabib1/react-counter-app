import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
 

// these are components
function HelloName(props) {

  // we wanna have only two values "Dilawer" or "Habib"

  const [name, setName] = useState("Dilawer");

  // useState = [ variable, functionToChangeThatVariable]
  // setName("Habib" => )
  // const [name, setName] = useState;

  const changeName = () => {
    if(name === "Dilawer") {
      setName("Habib")
    }
    if(name === "Habib") {
      setName("Dilawer")
    }
  }

  return (<>
    <p>Hello {name} </p>
                                              {/* ternary operator */}
    <button onClick={() => changeName()} >Change name to {name === "Dilawer" ? "Habib" : "Dilawer"}</button>
  </>);
}

// DOM (Document Object Model) https://dev.to/giandodev/nodes-vs-elements-466m
// React components (functional) https://dev.to/ericchapman/react-101-part-6-function-components-2ia5
// props https://reactjs.org/docs/components-and-props.html
// array and object destructuring https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// the concept of state in a component and how to use useState hook
// ternary operators
// JSX (lookup on youtube or smth)



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloName firstName="Dilawer" lastName="Hussain"/>
      </header>
    </div>
  );
}

export default App;
