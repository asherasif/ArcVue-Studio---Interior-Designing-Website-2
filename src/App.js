import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React, { Suspense } from "react"; // Import Suspense
import Spinner from "./Components/Spinner"; // Replace with your spinner component

// Use React.lazy with dynamic imports for route components
const Home = React.lazy(() => import('./Components/Home'));
const Project = React.lazy(() => import('./Components/Project'));


function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            exact
            path="/project"
            element={
              <Suspense fallback={<Spinner />}>
                <Project />
              </Suspense>
            }
          />
          <Route
            exact
            path="/about"
            element={<About />}
          />
          <Route
            exact
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App;
