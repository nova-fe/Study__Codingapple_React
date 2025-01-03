import { useState } from 'react';
import './App.css';

function App() {
  // let post = '강남 우동 맛집';
  let [글제목1, b] = useState('여자 코트 추천');
  let [글제목2, c] = useState('강남 우동맛집');
  let [글제목3, d] = useState('파이썬독학');

  return (
    <div>
      <div className="flex bg-black w-full text-white pl-5">
        <h4 className="font-bold text-lg py-4">React Blog</h4>
      </div>
      <div className="list pl-5 text-left border-b border-b-gray-300">
        <h4 className="font-bold text-lg py-4">{글제목1}</h4>
        <p className="py-3">1월 3일 발행</p>
      </div>
      <div className="list pl-5 text-left border-b border-b-gray-300">
        <h4 className="font-bold text-lg py-4">{글제목2}</h4>
        <p className="py-3">1월 3일 발행</p>
      </div>
      <div className="list pl-5 text-left border-b border-b-gray-300">
        <h4 className="font-bold text-lg py-4">{글제목3}</h4>
        <p className="py-3">1월 3일 발행</p>
      </div>
    </div>
  );
}

export default App;
