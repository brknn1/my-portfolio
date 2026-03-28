// src/App.jsx
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Roles from './components/Roles';

function App() {
  return (
    <div className="flex-layout">
      <Navbar />
      <Header />
      <About />
      <Roles />
    </div>
  );
}

export default App;