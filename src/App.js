import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';

function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage />}
          >
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
