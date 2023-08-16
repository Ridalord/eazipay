// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import DesktopNav from './components/Nav/desktopNav';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <DesktopNav />
        </header>
        <Routes>
          {/* <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} /> */}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
