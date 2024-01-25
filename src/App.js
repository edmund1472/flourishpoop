import logo from './logo.svg';
import './App.css';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Apply from './pages/Apply';
import Landing from './pages/Landing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error404 from './pages/Error404';

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' Component={Landing}></Route>
        <Route path='/apply' Component={Apply}></Route>
        <Route path='*' Component={Error404}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    
    </>
  );
}

export default App;
