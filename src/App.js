// import React, { useState } from 'react';

// function App() {
//   const [like, setLike] = useState(1);
//   const [blog, setBlog] = useState({
//     content: "React is very hard",
//     count: 0
//   })
//   // const [value, setValue] = useState(()=>{
//   //   return result
//   // })

//   const handleClick = (name) => { // ????
//     // logic
//     // console.log(name)
//     // setLike(1 - like);
//     setBlog({ count: blog.count + 1, content: blog.content }) //setBlog({ count: blog.count + 1,...blog)
//   }
//   return (
//     <div>
//       <h1>{blog.content}</h1>
//       <h1 onClick={() => handleClick('Tuấn Đẹp Trai')} style={{ cursor: 'pointer' }} >
//         {like === 1 ? "✔" : "❌"} {blog.count}
//       </h1 >
//       <h1 onClick={() => setLike(1 - like)} style={{ color: like === 1 ? "blue" : "black", backgroundColor: like === 1 ? "white" : "red", cursor: "pointer" }}>❤</h1>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='main'>
      <h1 className="tag">Counter</h1>
      <span id="value" className="numbles" style={{ color: count < 0 ? "red" : count > 0 ? 'blue' : 'black' }}>{count}</span>
      <div className="count-numbles">
        <button onClick={() => setCount(count - 1)} id="decrease" className="game decrease">Decrease</button>
        <button onClick={() => setCount(count - count)} id="rest" className="game">Rest</button>
        <button onClick={() => setCount(count + 1)} id="increase" className="game">Increase</button>
      </div>
    </div>
  )
}

export default App

