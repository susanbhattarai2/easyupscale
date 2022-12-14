import Home from './pages/home/Home'
import Client from './pages/clients/Clients'
import Business from './pages/business/Business'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Blog from './pages/blog/Blog'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/business' element={<Business />}/>
        <Route path='/client' element={<Client />}/>
        <Route path='/about' element={<About />}  />
        <Route path='/contact'element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
     
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
