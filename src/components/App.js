import React from "react";
import About from "./About";
import Home from "./Home";
import NavBar from "./Navbar";




// function About() {
//   return (
//     <div id="About">
//       <h1>About</h1>

//     </div>
//   )
// }
// // export default About


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
