import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import Footer from './Layout/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Jobs from './Pages/Jobs';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/my-jobs' element={<Jobs/>}/> */}
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
