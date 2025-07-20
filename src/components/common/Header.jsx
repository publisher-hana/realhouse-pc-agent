import { Link, useLocation } from 'react-router-dom';
const Header = () => {
  const location = useLocation();
  return (
    <header className="header">
      <h1><Link to="/"><img src='/realhouse-pc-agent/images/logo.png' alt='리얼하우스' /></Link></h1>
      <div className='right'>
        <nav>
          <ul className='menu-list'>
            <li><Link to="/mypage" className={`link ${location.pathname.startsWith("/mypage") ? "on" : ""}`}>마이홈</Link></li>
            <li><Link to="/itemSch" className={`link ${location.pathname.startsWith("/itemSch") ? "on" : ""}`}>매물검색</Link></li>
            <li><Link to="/myBuy" className={`link ${location.pathname.startsWith("/myBuy") ? "on" : ""}`}>나의매수</Link></li>
            <li><Link to="/mySell" className={`link ${location.pathname.startsWith("/mySell") ? "on" : ""}`}>나의매도</Link></li>
            <li><a href="https://publisher-hana.github.io/realhouse-pc/" className='external-link' target='_blank'>리얼하우스</a></li>
          </ul>
        </nav>
        {/* <Link to="" className='member'>로그인</Link> */}
        {/* <Link to="" className='member'>중개사 관리자</Link> */}
      </div>
    </header>
  )
}

export default Header