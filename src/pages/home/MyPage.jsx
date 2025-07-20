import { AppLink } from '../../components/home/AppLink'
import './homePage.css'
import { FiSettings } from "react-icons/fi";
import MyPoint from '../../components/home/MyPoint';
import ReqHistory from '../../components/home/ReqHistory';
import { Schedule } from '../../components/home/Schedule';
const MyPage = () => {
  return (
    <div className='container-wrap'>
      <div className="container mypage-profile">
        <section className='section user-section'>
          <div className="user-info">
            <div className="text">
              <h2>홍길동</h2>
              <p>your@email.com / 010-000-0000</p>
            </div>
            <button className="setting-btn">
               <span>설정</span>
              <FiSettings size={16} />
            </button>
          </div>
          <div className="info-card">
            <strong className="card-title black">은성공인중개사무소</strong>
            <div className="card-right">
              <ul className="card-list agnet-list">
                <li>출금 계좌:<span className="amt-type">정상</span></li>
                <li>평점:<span className="point">1,300점</span></li>
              </ul>
              <button className="btn-rd line">중개 가능용도 설정</button>
            </div>
          </div>
        </section>
        <section className='section'>
          <Schedule />
        </section>
         <section className='section'>
          <ReqHistory />
        </section>
        <section className="section">
          <h3 className="section-title">금일 의뢰인 방문 <span className="count">(<span className='point'>4</span>)</span></h3>
          <div className="visit-card">
            <div className="visit-item">
              <div className="visit-info">
                <div>홍길동 / 010-0000-0000</div>
                <div>방문요청 매물: <strong>5개</strong></div>
                <div>의뢰인 방문시간: <span className="highlight">15시 10분</span></div>
              </div>
              <button className="btn-rd line">중개현황</button>
            </div>
            <div className="visit-item">
              <div className="visit-info">
                <div>홍길동 / 010-0000-0000</div>
                <div>방문요청 매물: <strong>5개</strong></div>
                <div>의뢰인 방문시간: <span className="highlight">15시 10분</span></div>
              </div>
              <button className="btn-rd line">중개현황</button>
            </div>
            <div className="visit-footer">
              ※ 방문요청 매물을 등록한 매도측 중개사와 통화 후 현장 방문시간을 반드시 입력하십시오.
            </div>
          </div>

          <h3 className="section-title">금일 매물 안내 <span className="count">(<span className='point'>4</span>)</span></h3>
          <div className="visit-card">
            <div className="visit-item">
              <div className="visit-info">
                <div>요청번호: <strong>0221</strong></div>
                <div>현장방문 예상시간: <span className="highlight">15시 10분</span></div>
                <div>서울시 송파구 잠실동 231-1 (잠실주공1단지아파트) 103동 301호</div>
              </div>
              <button className="btn-rd line">방문현황</button>
            </div>
            <div className="visit-item">
              <div className="visit-info">
                <div>요청번호: <strong>0221</strong></div>
                <div>현장방문 예상시간: <span className="highlight">15시 10분</span></div>
                <div>서울시 송파구 잠실동 231-1 (잠실주공1단지아파트) 103동 301호</div>
              </div>
              <button className="btn-rd line">방문현황</button>
            </div>
            <div className="visit-footer">
              ※ 매수측 중개사가 방문하면 방문현황에서 방문완료로 처리하십시오.
            </div>
          </div>
        </section>
        <section className='section'>
          <div className="summary-card-group">
            <div className="summary-card">
              <div className="summary-title">관심매물</div>
              <div className="summary-value"><span className="count">3</span>개</div>
            </div>
            <div className="summary-card">
              <div className="summary-title">소속직원</div>
              <div className="summary-value"><span className="count">3</span>명</div>
            </div>
          </div>
        </section>
        <section className='section'>
          <MyPoint />
        </section>
        <section className="section">
          <AppLink />
        </section>
      </div>
    </div>
  )
}

export default MyPage