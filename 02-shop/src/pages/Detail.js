import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Detail(props) {

  useEffect(() => {
    // mount, update 시 코드 실행
    setTimeout(() => {
      document.querySelector('.alert').style.display = "none";
    }, 2000)
  });


  let [count, setCount] = useState(0);

  let { id } = useParams(); // 유저가 URL파라미터에 입력한 것을 가져옴
  let numId = Number(id);
  let prod = props.shoes.find(item => {
    return item.id === numId;
  });

  return (
    <div className="container">
      {/* Detail 페이지 방문 후 2초 지나면 아래 div 숨기기 */}
      <div className='alert alert-warning'>
        2초이내 구매시 할인
      </div>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
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
    </div>
  );
}
