
import { Navbar } from './components/Navbar';
import { Routing } from './Routing/Routing';
import './App.css';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routing/>
      <Footer/>
    </div>
  );
}

export default App;
