import Home from './pages/home/Home'
import Client from './pages/clients/Clients'
import Business from './pages/business/Business'
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

      </Routes>
     
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
