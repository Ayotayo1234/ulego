import './App.css';
import {  Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Faq from './pages/faq/Faq';
import Team from './pages/Team';
import Chat from './pages/Chat';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/faqs' element={<Faq />}/>
           <Route path='/team' element={<Team />}/>
           <Route path='/chat' element={<Chat />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;