import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Nav,  } from 'react-bootstrap';

// Context 사용하여 state 사용
import {Context1} from './../App.js'

export default function Detail(props) {

  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(0)

  useEffect(() => {
    // mount, update 시 코드 실행
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);

    // useEffect 동작 전 실행 return
    return () => {
      // 기존코드 치우는 것 여기에 많이 작성 (클린업)
      clearTimeout(a) // -> mount시 실행안됨, unmout시 실행
      // 기존 데이터요청은 제거해주세요~ 
    }
  }, []); // 1회만 실행되고 싶으면 빈 배열 넣기


  let { id } = useParams(); // 유저가 URL파라미터에 입력한 것을 가져옴
  let numId = Number(id);
  let prod = props.shoes.find(item => {
    return item.id === numId;
  });

  return (
    <div className="container">
      {
        // A && B 모두 true 일 때 오른쪽 값 반환
        // alert 가 true 일 때 뒤의 값 반환
        // alert 가 false 이면 false 반환
        alert && (
          <div className='alert alert-warning'>
          2초이내 구매시 할인
        </div>
        )
      }

      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${numId + 1}.jpg`}
            width="100%"
            alt="상품이미지"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{prod.title}</h4>
          <p>{prod.content}</p>
          <p>{prod.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => {탭변경(0)}} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => {탭변경(1)}} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => {탭변경(2)}} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent 탭={탭} />
    </div>
  );
}


function TabContent({탭}){
  let [fade, setFade] = useState('');
    // 보관함 안에 있던 state 들이 나옴
    let {재고} = useContext(Context1) // 보관함 해체 {state1, state2, ...}

  useEffect(()=>{
    setTimeout(()=>{setFade('end')}, 10)
    return ()=>{
      setFade('')
    }
  }, [탭])

  return (
    <div className={'start ' + fade}>
      {[ <div>{재고}</div>, <div>내용1</div>, <div>내용2</div> ][탭] }
    </div>
  )
}