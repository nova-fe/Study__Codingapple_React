import { useState } from 'react';
import './App.css';

function App() {
  // let post = '강남 우동 맛집';
  let [title, setTitle] = useState([
    '여자 코트 추천',
    '강남 우동맛집',
    '파이썬독학',
  ]);
  let defaultDate = new Date('2025-01-01');
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [titleIndex, setTitleIndex] = useState(0);
  let [inputVal, setInputVal] = useState('');
  let [date, setDate] = useState([defaultDate, defaultDate, defaultDate]);


  function changeTitle() {
    let copy = [...title];
    copy[0] = "남자 코트 추천"
    setTitle(copy);
  }

  return (
    <div>
      <div className="flex bg-black w-full text-white pl-5">
        <h4 className="font-bold text-lg py-4">React Blog</h4>
      </div>
      <div className="flex p-2">
        <button
          className="bg-gray-200 p-1 mr-2"
          onClick={() => {
            let copyTitle = [...title];
            copyTitle.sort();
            console.log(copyTitle);
            setTitle(copyTitle);
          }}
        >
          가나다순 정렬
        </button>
        <button
          className="bg-gray-200 p-1"
          onClick={() => {
            // * state 가 array/object 면 깊은복사로 복사해서 사용해야함
            let copyTitle = [...title];
            copyTitle[0] = '남자 코트 추천';
            setTitle(copyTitle);
          }}
        >
          title 변경
        </button>
      </div>

      {
        // 반복시 map 사용, 리액트에서는 return 에 html 넣으면 해당 부분들을 보여줌
        // map콜백함수의 두번째 파라미터는 반복문 돌 때마다 0부터 1씩 증가하는 정수
        title.map(function (a, i) {
          // i: 0, 1, 2
          return (
            <div key={i} className="list pl-5 text-left border-b border-b-gray-300">
              <h4 className="font-bold text-lg py-4" onClick={() => {
                setModal(!modal);
                setTitleIndex(i);
              }}>
                {title[i]}
                <span className='cursor-pointer' onClick={(e) => {
                  e.stopPropagation();  // 이벤트 버블링 막기
                  let copyLike = [...like]
                  copyLike[i] = copyLike[i] + 1;
                  setLike(copyLike);
                }}>👍</span> {like[i]}
              </h4>
              <p className="py-3">{(date[i].getMonth()) + 1}월 {date[i].getDate()}일 발행</p>
              <button className='bg-gray-200 mb-2 p-1' onClick={() => {
                let copyTitle = [...title];
                copyTitle.splice(i, 1);
                setTitle(copyTitle);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input className='border' type='text' onChange={(e) => {
        setInputVal(e.target.value);
      }} />
      <button onClick={() => {
        if (inputVal !== '') {
          let copyTitle = [...title];
          copyTitle.unshift(inputVal);
          setTitle(copyTitle);

          let copyLike = [...like];
          copyLike.unshift(0);
          setLike(copyLike);

          let copyDate = [...date];
          copyDate.unshift(new Date());
          setDate(copyDate);
        }
      }}>글발행</button>

      {
        modal === true ? <Modal title={title} titleIndex={titleIndex} changeTitle={changeTitle} /> : null
      }
    </div>
  );
}

// const Modal = () => { return () }

function Modal(props) {
  return (
    <div className="mt-5 p-5 bg-gray-200 text-left">
      <h4>{props.title[props.titleIndex]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.changeTitle}>글수정</button>
    </div>
  )
}

export default App;
