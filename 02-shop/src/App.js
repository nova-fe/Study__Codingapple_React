import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import bg from './img/bg.png';
import {useState } from 'react';
import data from './data.js';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Card from './components/Card.js';
import Detail from './pages/Detail.js';
import axios from 'axios'
import Cart from './pages/Cart.js';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate(); // 페이지 이동을 도와줌
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">My Shop</Navbar.Brand>
          <Nav className="me-auto flex gap-2">
            <button onClick={() => { navigate('/'); }} >
              홈
            </button>
            <button onClick={() => { navigate('detail'); }} >
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
              <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }} ></div>

              {/* 상품목록 */}
              <div className="container">
                <div className="row">
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
              }}>더보기</button>
            </>
          }
        />
        <Route path="/detail/:id" element={ <Detail shoes={shoes} /> } />

        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;