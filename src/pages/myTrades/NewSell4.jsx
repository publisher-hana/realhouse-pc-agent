import { Link } from "react-router-dom"

const NewSell4 = () => {
  return (
    <>
      <div className='container-wrap'>
        <div className="container">
          <div className="inquiry-step">
              <div className="step-title-wrap">
                <h2 className="step-title">매물 등록/수정</h2>
                <div className="step-indicator">
                  <span className="step-label">매물 등록/수정 완료</span>
                </div>
              </div>
              <div className="info-box">
                <div className="info-header">
                  <h3 className='title-label'>안내</h3>
                </div>

                <div className="info-body">
                  <ol className="info-list">
                    <li>매물 등록이 완료되면 매수측 중개사가 [방문요청]하면 [매물 확인요청]이 이뤄집니다.</li>
                    <li>[매물 확인요청]은 앱(리얼하우스프로)에서 실시간 벨소리가 울려 빠르게 확인하실 수 있습니다.</li>
                    <li>[매물 확인요청]을 빠르게 답변하시면 평점이 부여됩니다.</li>
                    <li>매수측 중개사와 방문시간 협의 후 [방문완료]로 처리하면 평점이 부여됩니다.</li>
                    <li>해당 매수측 중개사와 계약완료 후 [계약처리]하면 평점이 부여됩니다.</li>
                  </ol>
                  <hr className="info-divider" />

                  <div className="info-paragraph emphasis">
                   ※ 입력한 의뢰인에게 매물 등록 안내문자가 전송되며 중개사님이 등록한 매물을 관리할 수 있습니다.
                   <br/>※ 의뢰인이 매물을 직접 관리할 경우 추후 매물이 발생하면 중개사님에게 의뢰할 수 있습니다.(온라인 매도/임대 중개의뢰 무료)
                   <br/>※ 의뢰인 회원가입 후, [중개의뢰 관리요청]에서 [매물 관리요청]을 승인하면 중개의뢰를 관리할 수 있습니다.
                   <br/>(매물 관리요청을 승인할 경우 중개사님에게 시스템평점 10점 지급)
                  </div>
                </div>
              </div>
              <div className='btn-area'>
                <Link to="/myBuy" className="btn-blue">확인</Link>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewSell4