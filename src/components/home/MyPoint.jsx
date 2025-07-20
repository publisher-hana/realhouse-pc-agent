import "./home.css"
const MyPoint = () => {
  return (
    <>
      <div className="info-card">
        <div className="card-title">포인트</div>
        <div className="point-amount">
          <div className="amount"><span>10,000</span> 원</div>
          <button className="btn-rd point-btn">포인트 내역</button>
        </div>
      </div>
    </>
  )
}

export default MyPoint