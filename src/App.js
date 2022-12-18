import Home from './pages/home/Home'
import Clients from './pages/clients/Clients'
import Business from './pages/business/Business'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Blog from './pages/blog/Blog'
import Makecv from './pages/cv/Makecv'
import Uploadcv from './pages/cv/Uploadcv'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/business' element={<Business />}/>
        <Route path='/client' element={<Clients />}/>
        <Route path='/about' element={<About />}  />
        <Route path='/contact'element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/makecv' element={<Makecv/>}/>
        <Route path='/uploadcv' element={<Uploadcv/>}/>
      </Routes>
     
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
