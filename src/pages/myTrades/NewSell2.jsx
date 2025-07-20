import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom"

const NewSell2 = () => {
  return (
    <div className='container-wrap'>
      <div className="container">
        <div className="inquiry-step">
          <div className="step-title-wrap">
            <h2 className="step-title">매물 등록/수정</h2>
            <div className="step-indicator">
              <span className="step-number">1</span>
              <span className="step-number active">2</span>
              <span className="step-label">의뢰정보 입력</span>
            </div>
          </div>
          <section className="section">
            <h3 className="title-label">의뢰 구분</h3>
            <div className="form-card">
              <div className="form-row">
                <label className="form-label">매물주소</label>
                <div className="form-value">서울특별시 송파구 잠실동 311-10 (잠실 엘리티움)</div>
              </div>
              <div className="form-row">
                <label className="form-label required">매물구분</label>
                <div className="form-inline">
                  <select className="form-select">
                    <option>매물구분 선택</option>
                  </select>
                  <select className="form-select">
                    <option>매물유형 선택</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <label className="form-label required">거래구분</label>
                <div className="button-group">
                  <button className="option-btn active">임대</button>
                  <button className="option-btn">매매</button>
                </div>
              </div>
            </div>
          </section>
           <section className="section">
            <h3 className="title-label">의뢰인 정보</h3>
            <div className="form-card">
              <div className="form-row">
                <label className="form-label required">의뢰인 구분</label>
                <div className="button-group">
                  <button className="option-btn active">집주인 측</button>
                  <button className="option-btn">세입자</button>
                </div>
              </div>
               <div className="form-row">
                <div className="col">
                  <label className="form-label required">의뢰인 이름</label>
                  <input className="form-input short" placeholder="이름 입력"/> 
                </div>
                <div className="col">
                  <label className="form-label required">휴대전화</label>
                  <div className="form-phone">
                    <select className="form-select phone-prefix">
                      <option>010</option>
                      <option>011</option>
                      <option>016</option>
                    </select>
                    <span className="hyphen">-</span>
                    <input type="text" className="form-input phone-number" placeholder="휴대전화번호 입력" />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <label className="form-label required">거래구분</label>
                <div className="form-buttons">
                  <button className="btn active">임대</button>
                  <button className="btn">매매</button>
                </div>
              </div>
            </div>
          </section>
          <section className="section">
             <h3 className="title-label">매물 정보</h3>
            <div className="form-card">
              <div className="form-row">
                <label className="form-label required">해당 동</label>
                <input className="form-input" placeholder="예) 102,가,A,1" />
                <label><input type="checkbox" /> 동 없음</label>
              </div>
              <div className="form-row">
                <label className="form-label required">건물 총</label>
                <input className="form-input short" /> <span className="unit">층</span>
              </div>
              <div className="form-row">
                <div className="col">
                  <label className="form-label required">해당 층</label>
                  <input className="form-input short" /> <span className="unit">층</span>
                </div>
                <div className="col">
                  <label className="form-label required">해당 호수</label>
                  <input className="form-input" placeholder="예)102, B01" /> <span className="unit">호</span>
                </div>
              </div>
              <div className="desc">※ 동, 층, 호수 등의 정보를 정확히 입력하십시오.</div>
            </div>
          </section>
           <div className='btn-area'>
              <Link to="/mySell/newSell1" className="btn btn-prev"><IoIosArrowBack size={16}/>이전</Link>
              <Link to="/mySell/newSell3" className="btn btn-next">다음 <IoIosArrowForward size={16}/></Link>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default NewSell2