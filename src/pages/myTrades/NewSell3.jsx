import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom"
const manageList = [
  '전기세', '가스', '수도', '인터넷', 'TV',
];
const NewSell3 = () => {
  return (
    <div className='container-wrap'>
      <div className="container">
        <div className="inquiry-step">
          <div className="step-title-wrap">
            <h2 className="step-title">매물 등록/수정</h2>
            <div className="step-indicator">
              <span className="step-number">1</span>
              <span className="step-number">2</span>
              <span className="step-number active">3</span>
              <span className="step-label">매물 상세정보</span>
            </div>
          </div>
          <section className="section">
            <h3 className="title-label">매물 정보</h3>
            <div className="form-card">
               <div className="form-row">
                <div className="col">
                  <label className="form-label required">해당 동</label>
                  <div className="form-inline">
                    <input type="text" className="form-input" placeholder="예) 102, 가, A, 1" />
                    <span className="unit">동</span>
                    <label><input type="checkbox" /> 동 없음</label>
                  </div>
                </div>
                <div className="col">
                  <label className="form-label required">엘리베이터</label>
                  <div className="button-group">
                    <button type="button" className="option-btn active">있음</button>
                    <button type="button" className="option-btn">없음</button>
                  </div>  
                </div>
              </div>
               <div className="form-row">
                <div className="col">
                  <label className="form-label required">건물 층</label>
                  <div className="form-inline">
                    <input type="text" className="form-input"/><span className="unit">층</span>
                  </div>
                </div>
                <div className="col">
                  <label className="form-label required">난방 구조</label>
                   <select className="form-select">
                      <option>중앙난방</option>
                      <option>지역난방</option>
                      <option>개별난방</option>
                    </select> 
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <label className="form-label required">해당 층</label>
                  <div className="form-inline">
                    <input type="text" className="form-input"/><span className="unit">층</span>
                  </div>
                </div>
                <div className="col">
                  <label className="form-label required">해당 호수</label>
                  <div className="form-inline">
                    <input type="text" className="form-input"/><span className="unit">호</span>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <label className="form-label required">주차</label>
                <div className="button-group">
                  <button className="option-btn active">있음</button>
                  <button className="option-btn">없음</button>
                </div>
                 <input type="text" className="form-input short"/><span className="unit">만원</span>
              </div>
              <div className="form-row">
                <label className="form-label required">전용면적</label>
                <input type="text" className="form-input"/><span className="unit">㎡</span>
                <input type="text" className="form-input"/><span className="unit">평</span>
              </div>
              <div className="form-row">
                <label className="form-label required">공급면적</label>
                <input type="text" className="form-input"/><span className="unit">㎡</span>
                <input type="text" className="form-input"/><span className="unit">평</span>
              </div>
              <p className="desc point">※ 동, 층, 호수 등의 정보를 정확히 입력하십시오. (고객이나 매수측 중개사가 방문 후 신고하면 매물종료 처리될 수 있습니다.)</p>
            </div>
          </section>
           <section className="section">
            <h3 className="title-label">금액 정보</h3>
            <div className="form-card">
              <div className="form-row">
                <label className="form-label required">임대 구분</label>
                <div className="button-group">
                  <button className="option-btn active">전세</button>
                  <button className="option-btn">월세</button>
                  <button className="option-btn">단기임대</button>
                </div>
                <p className="desc">※ 거래구분 2종류 선택 가능(전세/단기임대 불가) ※ 월세 금액조절은 총 3개</p>
              </div>
              <div className="form-row">
                <div className="col">
                  <label className="form-label required">관리비</label>
                  <div className="button-group">
                    <button className="option-btn active">있음</button>
                    <button className="option-btn">없음</button>
                  </div>
                  <input type="text" className="form-input short"/><span className="unit">만원</span>
                </div>
                <div className="col">
                  <label className="form-label">관리비 포함</label>
                  {manageList.map((item, index) => (
                    <div className="checkbox-item"  key={index}>
                      <input
                        type="checkbox"
                      />
                      <label>{item}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="section">
             <h3 className="title-label">기본 정보</h3>
            <div className="form-card">
              <div className="form-row">
                <div className="col">
                  <label className="form-label required">방 개수</label>
                  <select className="form-select">
                    <option>원룸(개방형)</option>
                    <option>원룸(단독형)</option>
                    <option>2룸</option>
                    <option>3룸</option>
                    <option>4룸</option>
                  </select> 
                </div>
                <div className="col">
                  <label className="form-label required">욕실 수</label>
                  <select className="form-select">
                    <option>1개</option>
                    <option>2개</option>
                    <option>3개</option>
                    <option>4개</option>
                  </select> 
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <label className="form-label required">방향</label>
                  <select className="form-select">
                    <option>동향</option>
                    <option>서향</option>
                    <option>남향</option>
                    <option>북향</option>
                  </select> 
                </div>
                <div className="col">
                  <label className="form-label required">현관구조</label>
                  <div className="button-group">
                    <button className="option-btn active">복도식</button>
                    <button className="option-btn">계단식</button>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <label className="form-label required">반려동물</label>
                  <div className="button-group">
                    <button className="option-btn active">불가능</button>
                    <button className="option-btn">가능</button>
                  </div>
                </div>
                <div className="col">
                  <label className="form-label required">전세자금대출</label>
                  <div className="button-group">
                    <button className="option-btn active">불가능</button>
                    <button className="option-btn">가능</button>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <label className="form-label required">입주 가능일</label>
                <div className="button-group">
                  <button className="option-btn active">즉시 입주</button>
                  <button className="option-btn">날짜 협의</button>
                  <button className="option-btn">날짜 선택</button>
                </div>
               </div>
               <div className="form-row">
                <label className="form-label">옵션</label>
                <div className="button-group">
                  <button className="option-btn active">에어컨</button>
                  <button className="option-btn">세탁기</button>
                  <button className="option-btn">냉장고</button>
                  <button className="option-btn">가스레인지</button>
                  <button className="option-btn">인덕션</button>
                  <button className="option-btn">싱크대</button>
                  <button className="option-btn">침대</button>
                  <button className="option-btn">책상</button>
                  <button className="option-btn">옷장</button>
                  <button className="option-btn">신발장</button>
                  <button className="option-btn">전자도어락</button>
                  <button className="option-btn">TV</button>
                </div>
               </div>
               <div className="form-row">
                <label className="form-label">매물 특징</label>
                <div className="button-group">
                  <button className="option-btn active">급매</button>
                  <button className="option-btn">세안고</button>
                  <button className="option-btn">역세권</button>
                  <button className="option-btn">대로변</button>
                  <button className="option-btn">확장형</button>
                  <button className="option-btn">고급빌라</button>
                  <button className="option-btn">펜트하우스</button>
                  <button className="option-btn">마당</button>
                  <button className="option-btn">잔디</button>
                  <button className="option-btn">풀장</button>
                  <button className="option-btn">테라스</button>
                  <button className="option-btn">베란다/발코니</button>
                  <button className="option-btn">신축</button>
                  <button className="option-btn">도배/장판</button>
                  <button className="option-btn">도배</button>
                  <button className="option-btn">장판교체</button>
                  <button className="option-btn">올수리</button>
                  <button className="option-btn">욕실수리</button>
                  <button className="option-btn">주방교체</button>
                  <button className="option-btn">보일려교체</button>
                </div>
               </div>
            </div>
          </section>
          <section className="section">
             <h3 className="title-label">매물 설명</h3>
            <div className="form-card">
              <div className="form-row">
                <label className="form-label required">매물 설명</label>
                <div style={{width:'100%'}}>
                  <textarea></textarea>
                  <p className="desc">※ 500자 까지 작성하실 수 있습니다.</p>
                </div>
              </div>
            </div>
          </section>
           <div className='btn-area'>
              <Link to="/mySell/newSell1" className="btn btn-prev"><IoIosArrowBack size={16}/>이전</Link>
              <Link to="/mySell/newSell4" className="btn btn-next">다음 <IoIosArrowForward size={16}/></Link>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default NewSell3