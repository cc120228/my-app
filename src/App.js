import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar'
import Announcement from './components/HeaderBar/Announcement/Announcement';
import MainPage from './pages/main/MainPage'
import FemalePage from './pages/product/female/FemalePage'
import MalePage from './pages/product/male/MalePage'
import ProductDetailPage from './pages/product/ProductDetailPage';
import ScrollToTop from "./components/ScrollToTop";
import Settlement from './pages/settlement/Settlement';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
  
      <ScrollToTop />
      <Announcement></Announcement>
      <HeaderBar></HeaderBar>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/Female" element={<FemalePage />}></Route>
        <Route path="/Male" element={<MalePage />}></Route>
        <Route path="/ProductDetailPage" element={<ProductDetailPage />}></Route>
        <Route path="/Settlement" element={<Settlement />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
