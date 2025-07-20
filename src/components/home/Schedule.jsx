export const Schedule = () => {
  return (
   <div className="info-card">
      <strong className="card-title black">일정 관리</strong>
      <div className="card-right">
        <ul className="card-list">
          <li>오늘 일정:<span className="point">4</span></li>
          <li>내일 일정:<span className="point">3</span></li>
          <li>모레 일정:<span className="point">0</span></li>
        </ul>
        <button className="btn-rd line">일정 확인</button>
      </div>
    </div>
  )
}
