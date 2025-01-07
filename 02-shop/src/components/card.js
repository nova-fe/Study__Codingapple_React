export default function Card(props) {
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
