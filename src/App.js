import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Countdown from './components/Countdown';
import db from './firebase'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Countdown />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
