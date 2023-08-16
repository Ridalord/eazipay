import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import DesktopNav from './components/Nav/desktopNav';
import Home from './components/Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <DesktopNav />
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
