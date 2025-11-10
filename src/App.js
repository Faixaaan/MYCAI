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
import Dashboard from './Pages/Dashboard';
import SignIn from './Pages/auth/Login';
import SignUp from './Pages/auth/signup';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JobListing from './Pages/JobListing';
import JobDetailPage from './Pages/JobListing/jobDetailPage';



function App() {
  return (
    <>
          <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/my-jobs' element={<Jobs />} />
          <Route path='/cvi-wallet' element={<Wallet />} />
          <Route path='/my-cv' element={<MyCv />} />
          <Route path='/my-courses' element={<MyCourse />} />
          <Route path='/my-mock-interview' element={<MockInterview />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/joblisting' element={<JobListing />} />
          <Route path="/job-detail/:id" element={<JobDetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
