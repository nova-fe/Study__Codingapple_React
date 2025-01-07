import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
// 1) jsx 안에서 이미지 불러오기: import 작명 from '이미지경로';
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data.js';

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">My Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

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
    </div>
  );
}

export default App;

export function Card(props) {
  return (
    <div className="col-md-4">
      <img
        // public/폴더/이미지 이런식일 경우 아래 방식으로 사용 (권장 방식)
        src={`https://codingapple1.github.io/shop/shoes${props.index + 1}.jpg`}
        width="80%"
        alt="상품 이미지"
      />
      <h4>{props.item.title}</h4>
      <p>{props.item.content}</p>
      <p>{props.item.price}</p>
    </div>
  );
}
