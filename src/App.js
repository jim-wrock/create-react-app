import React, { Component } from "react";
import logo from "./logo.png";
import logo2 from "./logo3.svg";
import "./App.css";
import Avatar from "./Avatar.jsx";
import Compteur from "./Compteur.jsx";

// import Character from "./Character.jsx";

import Hello from "./Hello.jsx";

//Character from livecoding

// class App extends Component {
//   render() {
//     return (
//     <div>
//     <Character name="Gandalf"/>
//     <Character name="bidule"/>
//     </div>
//     );
//   }
// }

// end of Character from livecoding

// console.table([2,3,5,4,8,5,4,7,8,5,9,6,5,4,7,8,5,9,6,5,4,7,8,9])

//------------------------

//-----------------------
// const ToggleButton = ({ active }) => (
//   <button
//     style={{
//       fontWeight: active ? "bold" : "normal"
//     }}
//   >
//     Button
//   </button>
// );

// const App = () => (
//   <div>
//     <ToggleButton active />
//     <ToggleButton />
//   </div>
// );
//------------------------

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <img src={logo2} className="App-logo2" alt="logo" />

          <Hello />
          <Compteur />
          <Avatar
            // image = "https://www.syfy.com/sites/syfy/files/cast_futurama_phillipjfry.jpg"
            firstName="Fry"
            lastName=""
          />

          <Avatar
            image="http://orig09.deviantart.net/fb31/f/2012/119/b/7/zoidberg_trace_by_deepfry3-d4y0wlc.png"
            firstName="Pr"
            lastName="Zoidberg"
            star
          />

          <Avatar
            image="http://orig02.deviantart.net/3b7c/f/2014/128/d/5/leela_vector_by_aryadei-d7hm26n.png"
            firstName="Leela"
            lastName="Turanga"
            star="true"
          />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eat React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
