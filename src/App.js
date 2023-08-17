import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import DesktopNav from './components/Nav/desktopNav';
import Home from './components/Pages/Home';
import Footer from './components/Footer/footer';

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
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
