import { useState } from 'react';
import './App.css';

function App() {
  // let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState([
    '여자 코트 추천',
    '강남 우동맛집',
    '파이썬독학',
  ]);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div>
      <div className="flex bg-black w-full text-white pl-5">
        <h4 className="font-bold text-lg py-4">React Blog</h4>
      </div>
      <div className="list pl-5 text-left border-b border-b-gray-300">
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
        <div
          onClick={() => {
            // 숙제: 버튼 클릭시 여자 코트 추천 -> 남자 코트 추천으로 바꾸기
            글제목변경(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
          }}
        >
          글제목 변경
        </div>
        <p className="py-3">1월 3일 발행</p>
      </div>
      <div className="list pl-5 text-left border-b border-b-gray-300">
        <h4 className="font-bold text-lg py-4">{글제목[1]}</h4>
        <p className="py-3">1월 3일 발행</p>
      </div>
      <div className="list pl-5 text-left border-b border-b-gray-300">
        <h4 className="font-bold text-lg py-4">{글제목[2]}</h4>
        <p className="py-3">1월 3일 발행</p>
      </div>
    </div>
  );
}

export default App;
