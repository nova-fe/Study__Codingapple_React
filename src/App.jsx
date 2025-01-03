import "./App.css";

function App() {
  let post = "강남 우동 맛집";

  return (
    <div>
      <div className="flex bg-black w-full text-white pl-5">
        <h4 style={{ color: "yellow", fontSize: "20px" }}>블로그</h4>
      </div>

      <h4>{post}</h4>
    </div>
  );
}

export default App;
