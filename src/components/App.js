import Navbar from './Navbar';
import '../cssfile/App.css';
import Home from './home';
import About from './about';
import Project from './Project';
import StarsCanvas from '../canvas/Stars';
import Contact from './contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="appcss">
        <About />
        <Project/>
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
  );
}

export default App;
