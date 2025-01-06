import { useState } from 'react';
import './App.css';

function App() {
  // let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState([
    '여자 코트 추천',
    '강남 우동맛집',
    '파이썬독학',
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  function changeTitle() {
    let copy = [...글제목];
    copy[0] = "남자 코트 추천"
    글제목변경(copy);
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
            let 글제목정렬 = [...글제목];
            글제목정렬.sort();
            console.log(글제목정렬);
            글제목변경(글제목정렬);
          }}
        >
          가나다순 정렬
        </button>
        <button
          className="bg-gray-200 p-1"
          onClick={() => {
            // * state 가 array/object 면 깊은복사로 복사해서 사용해야함
            let 글제목복사 = [...글제목];
            글제목복사[0] = '남자 코트 추천';
            글제목변경(글제목복사);
          }}
        >
          글제목 변경
        </button>
      </div>

      {
        // 반복시 map 사용, 리액트에서는 return 에 html 넣으면 해당 부분들을 보여줌
        // map콜백함수의 두번째 파라미터는 반복문 돌 때마다 0부터 1씩 증가하는 정수
        글제목.map(function (a, i) {
          // i: 0, 1, 2
          return (
            <>
              <div key={i} className="list pl-5 text-left border-b border-b-gray-300">
                <h4 className="font-bold text-lg py-4" onClick={() => {
                  setModal(!modal);
                  setTitle(i);
                }}>
                  {글제목[i]}
                  <span className='cursor-pointer' onClick={() => {
                    let 따봉복사 = [...따봉]
                    따봉복사[i] = 따봉복사[i] + 1;
                    따봉변경(따봉복사);
                  }}>👍</span> {따봉[i]}
                </h4>
                <p className="py-3">1월 3일 발행</p>
              </div>
            </>
          )
        })
      }

      {/* 글 내용 모달 */}
      {
        modal === true ? <Modal 글제목={글제목} title={title} changeTitle={changeTitle} /> : null
      }
    </div>
  );
}

// const Modal = () => { return () }

function Modal(props) {
  return (
    <div className="mt-5 p-5 bg-gray-200 text-left">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.changeTitle}>글수정</button>
    </div>
  )
}

export default App;
