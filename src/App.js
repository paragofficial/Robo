// import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav'
import Roboclub from './component/Roboclub';
import About from './component/About';
import Achievements from './component/Achievements';
import Teams from './component/Teams';
import Participation from './component/Participation';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <Nav/>
      <Routes>
          <Route path="/"  element={<Roboclub/>}></Route>
          <Route path="/about"  element={<About/>}></Route>
          <Route path="/achievements"  element={<Achievements/>}></Route>
          <Route path="/participation"  element={<Participation/>}></Route>
          <Route path="/team"  element={<Teams/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
