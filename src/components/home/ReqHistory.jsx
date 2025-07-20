const ReqHistory = () => {
  return (
    <div className="info-card">
      <div className="card-left">
        <strong className="card-title black">요청 내역(<span className="point">4</span>)</strong>
        <div className="card-text">
          온라인 중개의뢰, 매물확인요청을 확인하십시오.
          <br />매수측 중개사가 방문 요청한 매물을 문의할 경우 [요청번호]를 통해 빠른 답변이 가능합니다.
        </div>
      </div>
        <button className="btn-rd chk-btn">요청내역 확인</button>
    </div>
  )
}

export default ReqHistory