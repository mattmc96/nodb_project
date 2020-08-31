import React from "react";
import Homepage from "./components/Homepage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

// import React, { Component } from "react";
// import Homepage from "./components/Homepage";
// import "./App.css";
// // import data from "./data";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       data: data,
//     };
//   }

//   render() {
//     const listDisplay = this.state.data.map(function (element, index) {
//       console.log(data);
//       return <Homepage key={index} data={data} />;
//     });

//     return <div className="App">{listDisplay}</div>;
//   }
// }

// export default App;

export default App;
