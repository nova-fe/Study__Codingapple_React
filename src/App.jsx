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
  // 2. UI의 현재 상태를 state 로 저장
  let [modal, setModal] = useState(false);

  [1, 2, 3].map(function () {
    return '123'  // return값은 array에 담음(*원본은 수정되지 않음)
  })

  return (
    <div>
      <div className="flex bg-black w-full text-white pl-5">
        <h4 className="font-bold text-lg py-4">React Blog</h4>
      </div>
      <div className="flex p-2">
        <button
          className="bg-gray-200 p-1 mr-2"
          onClick={() => {
            // 숙제: 가나다순 정렬 버튼과 기능 만들기
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
            // 숙제: 버튼 클릭시 여자 코트 추천 -> 남자 코트 추천으로 바꾸기
            // let 글제목복사 = 글제목; -> 이렇게하면 같은 화살표를 사용하기 때문에 업데이트 되지 않음
            // * state 가 array/object 면 깊은복사로 복사해서 사용해야함
            let 글제목복사 = [...글제목];
            글제목복사[0] = '남자 코트 추천';
            글제목변경(글제목복사);
          }}
        >
          글제목 변경
        </button>
      </div>
      {/* <div className="list pl-5 text-left border-b border-b-gray-300">
        <h4 className="font-bold text-lg py-4">
          {글제목[0]}{' '}
          <span
            onClick={
              // 항상 함수를 넣어야함
              // 함수명
              // function() {console.log(1)}
              // () => { console.log(1);}
              () => {
                따봉변경(따봉 + 1);
              }
            }
          >
            👍
          </span>{' '}
          {따봉}
        </h4>
        <p className="py-3">1월 3일 발행</p>
      </div>
      <div className="list pl-5 text-left border-b border-b-gray-300">
        <h4 className="font-bold text-lg py-4">{글제목[1]}</h4>
        <p className="py-3">1월 3일 발행</p>
      </div>
      <div className="list pl-5 text-left border-b border-b-gray-300">
        <h4 onClick={
          // 숙제: 제목 또 누르면 모달 닫히도록
          () => { setModal(!modal) }
        } className="font-bold text-lg py-4">{글제목[2]}</h4>
        <p className="py-3">1월 3일 발행</p>
      </div> */}

      {
        // 반복시 map 사용, 리액트에서는 return 에 html 넣으면 해당 부분들을 보여줌
        // map콜백함수의 두번째 파라미터는 반복문 돌 때마다 0부터 1씩 증가하는 정수
        글제목.map(function (a, i) {
          // index: 0, 1, 2
          return (
            <div key={i} className="list pl-5 text-left border-b border-b-gray-300">
              <h4 className="font-bold text-lg py-4">
                {글제목[i]}
                {/* 숙제: 각각 다른 따봉 state 적용하기 */}
                <span className='cursor-pointer' onClick={() => {
                  let 따봉복사 = [...따봉]
                  따봉복사[i] = 따봉복사[i] + 1;
                  따봉변경(따봉복사);
                }}>👍</span> {따봉[i]}
              </h4>
              <p className="py-3">1월 3일 발행</p>
            </div>
          )
        })
      }

      {
        modal === true ? <Modal /> : null
      }
    </div>
  );
}

// const Modal = () => { return () }

function Modal() {
  return (
    <div className="mt-5 p-5 bg-gray-200 text-left">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
