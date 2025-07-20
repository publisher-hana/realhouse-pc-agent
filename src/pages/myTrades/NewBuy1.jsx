import { IoIosArrowForward } from 'react-icons/io'
import './mytrades.css'
import { Link } from 'react-router-dom'
const NewBuy1 = () => {
  return (
    <>
    <div className='container-wrap'>
        <div className="container">
          <div className="inquiry-step">
            <div className="step-title-wrap">
              <h2 className="step-title">매수/임차 중개의뢰 등록</h2>
              <div className="step-indicator">
                <span className="step-number active">1</span>
                <span className="step-label">중개의뢰 정보 입력</span>
              </div>
            </div>
            <section className='section  form-section'>
              <h3 className='section-title'>의뢰구분</h3>
              <div className="option-grid">
                <div className="option-group">
                  <label>거래구분</label>
                  <div className="button-group">
                    <button className="option-btn active">전세</button>
                    <button className="option-btn">월세</button>
                    <button className="option-btn">매매</button>
                    <button className="option-btn">단기임대</button>
                  </div>
                </div>

                <div className="option-group">
                  <label>매물유형</label>
                  <div className="button-group">
                    <button className="option-btn active">아파트</button>
                    <button className="option-btn">주상복합</button>
                    <button className="option-btn">연립/빌라</button>
                    <button className="option-btn">오피스텔</button>
                    <button className="option-btn">도시형</button>
                    <button className="option-btn">다가구주택</button>
                    <button className="option-btn">상가주택</button>
                    <button className="option-btn">원룸주택</button>
                    <button className="option-btn">단독/전원</button>
                    <button className="option-btn">한옥주택</button>
                    <button className="option-btn">타운하우스</button>
                  </div>
                </div>
                <p className='desc'>※ 거래구분은 하나만 선택이 가능하며 매물유형은 복수로 선택이 가능합니다.</p>
              </div>
            </section>
            <section className='section form-section'>
                <h3 className="section-title">의뢰정보</h3>
                
                <div className="form-grid">
                  <div className="form-row">
                    <label className="form-label required">의뢰인 이름</label>
                    <input className="form-input" placeholder="이름 입력" />
                  </div>

                  <div className="form-row">
                    <label className="form-label required">휴대전화</label>
                    <div className="form-phone">
                      <select className="form-select">
                        <option>010</option>
                      </select>
                      <span className="hyphen">-</span>
                      <input className="form-input" placeholder="휴대전화번호 입력" />
                    </div>
                  </div>

                  <div className="form-row">
                    <label className="form-label">방문시간 선택</label>
                    <div className="form-inline">
                      <select className="form-select"><option>방문일 선택</option></select>
                      <select className="form-select"><option>시간 선택</option></select>
                    </div>
                  </div>

                  <div className="form-row">
                    <label className="form-label">비공개 메모</label>
                    <div className="form-hint">
                      <p>비공개 메모를 등록하시면 중개의뢰 현황의 메모에 나타납니다.</p>
                      <p>비공개 메모는 등록자만 확인 가능합니다.</p>
                    </div>
                  </div>
                </div>

                <div className="desc">
                  ※ 의뢰 구분과 의뢰 정보를 모두 입력하시면 [확인]이 활성화되며, 매수/임차 중개의뢰가 등록됩니다.
                </div>
            </section>

            <div className='btn-area'>
              <Link to="/myBuy/newBuy2" className="btn">다음 <IoIosArrowForward size={16}/></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewBuy1