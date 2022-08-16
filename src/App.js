import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import Home from './components/home';
import Schedule from './components/schedule';
import Edit from './components/edit'
import HomeSort from './components/homeSort'
import About from './components/about'
function App() {
  return (
    <Router>
        <nav className="navbar navbar-expand navbar-light bg-danger ">
        <Link to="/" className="navbar-brand mx-auto" style={{color:"white", fontStyle: "italic", fontSize:"2em"}}>Расписание тренировок</Link>
        <div className="collpase navbar-collapse">
          <ul className="nav navbar-nav ml-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link" style={{color: "White"}}>Расписание</Link>
            </li>
            <li className="navbar-item">
              <Link to="/Sort" className="nav-link" style={{color: "White"}}>Расписание по дате</Link>
            </li>
            <li className="navbar-item">
              <Link to="/schedule" className="nav-link"style={{color: "White"}}>Добавить запись</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="nav-link"style={{color: "White"}}>О программе</Link>
            </li>
          </ul>
        </div>
        </nav>



      <Route path="/" exact component={Home} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/Sort" component={HomeSort} />
      <Route path='/edit/:id' component={Edit} />
      <Route path='/about' component={About} />
    </Router>
  );
}

export default App;
