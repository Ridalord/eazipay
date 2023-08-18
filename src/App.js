import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DesktopNav from './components/Nav/desktopNav';
import Home from './components/Pages/Home';
import Footer from './components/Footer/footer';
import Dashboard from './components/Pages/Dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <Router basename="/eazipay">
        <header className="App-header">
          <DesktopNav />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
