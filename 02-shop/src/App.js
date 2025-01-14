import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
// 1) jsx 안에서 이미지 불러오기: import 작명 from '이미지경로';
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Card from './components/Card.js';
import Detail from './pages/Detail.js';
import axios from 'axios'

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate(); // 페이지 이동을 도와줌

  return (
    <div className="App">
      {/* *
       * :: Route: 페이지
       * <Router path="/경로로쓸이름" element={보여질부분} />
       *  <Routes>
            <Route path="/" element={<div>메인페이지</div>} />
            <Route path="/detail" element={<div>상세페이지</div>} />
            <Route />
          </Routes>
      */}

      {/* <Route path="*" element={<div>없는페이지(404)</div>} /> */}
      {/* <Route path="/about/member" element={<About />} />
      <Route path="/about/location" element={<About />} /> */}

      {/**
       * :: Nested Routes (서브페이지 개념처럼 사용)
       * 언제 사용? 여러 유사한 페이지 필요할때
       * 장점1: route 작성이 간단해짐
       * 장점2: mested route 접속시엔 element 2개가 보임
       * => /about/member로 접속시 path="/about"에 있는 element 와 path="member"에 있는 element를 동시에 보여줌(2개가 보여짐)
       * => <About/> 안에 <div>member 페이지</div>
       */}
      {/* <Route path="/about" element={<About />}>
        <Route path="member" element={<div>member 페이지</div>} />
        <Route path="location" element={<div>location 페이지</div>} />
      </Route> */}

      {/**
       * :: Link: 페이지 이동 버튼
       * <Link to="/이동할경로"></Link>
       */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">My Shop</Navbar.Brand>
          <Nav className="me-auto flex gap-2">
            {/* <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link> */}
            {/* <button onClick={() => { navigate(1);}}>앞으로가기</button>
            <button onClick={() => { navigate(-1);}}>뒤로가기</button> */}
            <button
              onClick={() => {
                navigate('/');
              }}
            >
              홈
            </button>
            <button
              onClick={() => {
                navigate('detail');
              }}
            >
              상세페이지
            </button>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="main-bg"
                // 2) jsx 안에서 이미지 불러오기: 위에서 import 해온 이미지 변수명 넣기;
                style={{ backgroundImage: 'url(' + bg + ')' }}
              ></div>

              {/* 상품목록 */}
              <div className="container">
                <div className="row">
                  {/**
                   * 1. 상품목록 컴포넌트화
                   * 2. 데이터바인딩
                   * 3. 반복적인 부분은 map 반복문 써보기
                   */}
                  {shoes.map(function (item, index) {
                    return <Card item={item} index={index} />;
                  })}
                </div>
              </div>

              <button onClick={() => {
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result) => {
                  const copy = [...shoes];
                  const copy2 = copy.concat(result.data);
                  setShoes(copy2);
                })
                .catch((error) => {
                  console.log(error.message)
                })
              }}>더보기</button>
            </>
          }
        />
        {/* /:파라미터 -> URL파라미터 */}
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
      </Routes>

    </div>
  );
}

export default App;

// function About() {
//   return (
//     <div>
//       <h4>회사정보 페이지</h4>
//       {/* Outlet: Nested Routes가 어디에 보여줄지 알려줌 */}
//       <Outlet></Outlet>
//     </div>
//   );
// }
