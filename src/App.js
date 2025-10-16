import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import Footer from './Layout/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Jobs from './Pages/Jobs';
import Wallet from './Pages/Wallet';
import MyCv from './Pages/MyCv';
import MyCourse from './Pages/MyCourse';
import MockInterview from './Pages/MockInterview';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/my-jobs' element={<Jobs />} />
          <Route path='/cvi-wallet' element={<Wallet />} />
          <Route path='/my-cv' element={<MyCv />} />
          <Route path='/my-courses' element={<MyCourse />} />
          <Route path='/my-mock-interview' element={<MockInterview />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
