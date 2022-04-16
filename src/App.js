import './App.css';
import React, { useEffect, useState } from 'react';
import Info from './components/Info';
import Register from './components/Register';
import Welcome from './components/Welcome';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [dogs, dataDogs] = useState([]);

  useEffect(() => {
    const url = "https://api.jsonbin.io/b/624ddc6f5912290c00f5af18"; 

    fetch(url)
    .then (response => response.json())
    .then (dataDogs);
  }, []);


  return (
    <div className="App">
      <main>
        <Router>
          <Routes>

           <Route exact path="/" element={
             <Welcome />
           } />

           <Route path="/welcome" element={
             <Welcome />
           } />

            <Route path="/register/:chipNumber" element={
             <Register dogs = {dogs} />
           } />

            <Route path="/dogs" element={
             <Info dogs = {dogs} />
           } />

         </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
