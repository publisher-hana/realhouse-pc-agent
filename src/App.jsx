import { Route, HashRouter as Router, Routes, useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles/global.css'
import './styles/common.css'
import Header from './components/common/Header';
import Home from './pages/home/Home';
import Footer from './components/common/Footer';
import MyPage from './pages/home/MyPage';
import ItemSearch from './pages/offer/ItemSearch';
import MySell from './pages/myTrades/MySell';
import Mybuy from './pages/myTrades/Mybuy';
import NewBuy1 from './pages/myTrades/NewBuy1';
import NewBuy2 from './pages/myTrades/NewBuy2';
import NewSell1 from './pages/myTrades/NewSell1';
import NewSell2 from './pages/myTrades/NewSell2';
import NewSell3 from './pages/myTrades/NewSell3';
import NewSell4 from './pages/myTrades/NewSell4';
function App() {
  return (
    <>
      <Router>
        <div className='wrapper'>
          <Header />
          <Routes>  
            <Route path='/' element={<Home />} />
            <Route path='/mypage' element={<MyPage />} />
            <Route path='/itemSch' element={<ItemSearch />} />
            <Route path='/myBuy' element={<Mybuy />} />
            <Route path='/mySell' element={<MySell />} />
            <Route path='/myBuy/newBuy1' element={<NewBuy1 />} />
            <Route path='/myBuy/newBuy2' element={<NewBuy2 />} />
             <Route path='/mySell/newSell1' element={<NewSell1 />} /> 
             <Route path='/mySell/newSell2' element={<NewSell2 />} /> 
             <Route path='/mySell/newSell3' element={<NewSell3 />} /> 
             <Route path='/mySell/newSell4' element={<NewSell4 />} /> 
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
