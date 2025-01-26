import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
// 1) jsx 안에서 이미지 불러오기: import 작명 from '이미지경로';
import bg from './img/bg.png';
import { createContext, useState } from 'react';
import data from './data.js';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Card from './components/Card.js';
import Detail from './pages/Detail.js';
import axios from 'axios'

// Context 세팅 1. createContext로 Context 만들기
export let Context1 = createContext(); // state보관함(Context)를 만들어줌

function App() {
  let [shoes, setShoes] = useState(data);
  let [재고] = useState(10, 11, 12);
  let navigate = useNavigate(); // 페이지 이동을 도와줌
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

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

              {
                isLoading && <div className="spinner-border" role="status"></div>
              }
                            

              <button onClick={() => {
                setIsLoading(true);
                setCount(count + 1);
                if(count === 0) {
                  axios.get(`https://codingapple1.github.io/shop/data2.json`)
                  .then((result) => {
                    const copy = [...shoes, ...result.data];  // 결과.data는 원래 JSON인데 axios 에서 알아서 변환해줌
                    setShoes(copy);

                    setIsLoading(false);  // 로딩중 UI 숨기기
                  })
                  .catch((error) => {
                    console.log(error.message)
                  })
                } else if (count === 1) {
                  axios.get(`https://codingapple1.github.io/shop/data3.json`)
                  .then((result) => {
                    const copy = [...shoes, ...result.data];  // 결과.data는 원래 JSON인데 axios 에서 알아서 변환해줌
                    setShoes(copy);
  
                    setIsLoading(false); // 로딩중 UI 숨기기
                  })
                  .catch((error) => {
                    console.log(error.message);
                  })
                } else {
                  alert("상품 없음");
                }


                // * 서버로 데이터전송
                // axios.post('/url1', {name: 'kim'})
                // * 동시에 ajax 요청 여러개
                // Promise.all([axios.get('/url1'),axios.get('/url2')]).then((result) => {})

                // * fetch 를 사용할 경우는 .json()을 사용한 변환 필요
                // fetch('URL').then(결과 => 결과.json()).then((결과) => { console.log(결과) } )

              }}>더보기</button>
            </>
          }
        />
        {/* /:파라미터 -> URL파라미터 */}
        <Route path="/detail/:id" element={
          // Context 세팅 2. <Context>로 원하는 컴포넌트 감싸기
          // Context 세팅 3. 원하는 state 를 value 안에 넣기
          // => 안에 있는 모든 컴포넌트는 재고, shoes 사용 가능
          <Context1.Provider value={{재고 }}>
            <Detail shoes={shoes} />
          </Context1.Provider>
          } />
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
