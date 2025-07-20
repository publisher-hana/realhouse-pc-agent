import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="container-wrap">
      <div className="container">
        <section className="home-section">
          <div className="home-top flex-between">
            <div className="main-title flex-group">
              <span className="home-logo"><img src='/realhouse-pc-agent/images/logo.png' alt='리얼하우스' /></span>
              <h2 className="title">중개사 관리자</h2>
            </div>
            <Link to="" className="link">리얼하우스 홈 바로가기</Link>
          </div>
          <div className="dashboard-container">
            {/* 왼쪽 영역 */}
            <div className="dashboard-left">
              <div className="card">
                <div>
                  아직도 광고성 매물을 등록하시나요?<br />
                  아직도 허위매물로 인해 피해를 보고 계신가요?<br />
                  아직도 매물 등록비용으로 부담을 느끼시나요?<br /><br />
                  이젠, 리얼하우스가 공인중개사님의 힘이 되겠습니다.
                </div>
                <button className="btn turquoise">리얼하우스 소개</button>
              </div>

              <div className="card secondary">
                <p className="highlight red">리얼하우스 홍보동영상</p>
                <button className="btn green">동영상 보기</button>
              </div>
            </div>

            {/* 오른쪽 영역 */}
            <div className="dashboard-right">
              <div className="card">
                <h4 className="card-title">소속 중개사무소</h4>
                <button className="btn red full">중개사무소 등록</button>
                <p className="caption">※ 로그인 후 소속 중개사무소를 등록하십시오.</p>
              </div>

              <div className="card">
                <h4 className="card-title">매뉴얼 다운로드</h4>
                <button className="btn outline">리얼하우스 매뉴얼</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home