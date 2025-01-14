import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function Detail(props) {
  let [alert, setAlert] = useState(true);
  let [text, setText] = useState("");
  let [isDanger, setIsDanger] = useState(false);

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

  useEffect(() => {
    if(isNaN(text)){  // text가 문자면 true, 숫자면 false
      setIsDanger(true);
    } else {
      setIsDanger(false);
    }
  }, [text])
  
  



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
        {
          isDanger && <div className='alert alert-danger'>숫자만 입력하세요</div>
        }
        <input onChange={(e) => {
          setText(e.target.value);
        }} />
        <div className="col-md-6">
          <h4 className="pt-5">{prod.title}</h4>
          <p>{prod.content}</p>
          <p>{prod.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
