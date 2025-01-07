import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
// 1) jsx 안에서 이미지 불러오기: import 작명 from '이미지경로';
import bg from './img/bg.png';

function App() {
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
          <div className="col-md-4">
            <img
              // public/폴더/이미지 이런식일 경우 아래 방식으로 사용 (권장 방식)
              src={process.env.PUBLIC_URL + '/logo192.png'}
              width="80%"
              alt="상품 이미지1"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
              alt="상품 이미지2"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
              alt="상품 이미지3"
            />
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
