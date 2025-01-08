import { useParams } from 'react-router-dom';

export default function Detail(props) {
  let { id } = useParams(); // 유저가 URL파라미터에 입력한 것을 가져옴
  let numId = Number(id);
  let prod = props.shoes.find(item => {
    return item.id === numId;
  });

  return (
    <div className="container">
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
