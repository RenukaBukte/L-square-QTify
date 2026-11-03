// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Hero />
      <Section title="Top Albums" />
      <Routes>  
        <Route exact path="/" component={Hero} />  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
