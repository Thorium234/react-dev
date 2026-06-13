// import React, { useState } from 'react';
//import './App.css';
import './index.css';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="app-container">
//       <h1>React Counter App</h1>
//       <div className="counter-display">
//         <h2>{count}</h2>
//       </div>
//       <div className="button-group">
//         <button onClick={() => setCount(count - 1)}>Decrement</button>
//         <button onClick={() => setCount(0)}>Reset</button>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from 'react';

// function HelloWorld() {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//       <p>Welcome to my first React application</p>
//     </div>
//   );
// }
// function HelloWorld() {
//   const name = "React Beginner";
//   const currentDate = new Date().toLocaleDateString();
  
//   return (
//     <div>
//       <h1>Hello, {name}!</h1>
//       <p>Welcome to my first React application</p>
//       <p>Today is {currentDate}</p>
//     </div>
//   );
// }

// export default HelloWorld;
// import { useState,useEffect } from 'react';
// const Card = ({title}) =>{
//   const[count, setCount]=useState(0);
//   const [hasLiked, setHasLiked]=useState(false);

//   useEffect(()=>{
//     console.log(`User has ${hasLiked ? 'liked' : 'unliked'} the card: ${title}`);
//   },[hasLiked,title])


//   useEffect(()=>{
//   console.log('cardRendered')
// },[])

//   return(
//     <div className="card" onClick={()=> setCount(count+1)}>
//       <h2>{title }<br />{count || null }</h2>
//       <button onClick={()=> setHasLiked(!hasLiked)}>
      
//       {hasLiked ? 'Unlike' : 'Like'}
//       </button>

//     </div>
//   )
// }

// const App=()=>{
//   return(
//     <div>
//       <h1>functional arrow component</h1>
//       <Card title="thorium234" />
//       <Card title="thorium234" />
//       <Card title="thorium234" />
//       <Card title="thorium234" />
//     </div>
//   )
// } 
// export default App;

/*import React from 'react'

const App = () => {
  return (
    <div >
      <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
    </div>
  )
}

export default App
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import StudentCard from './components/StudentCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <div className="main-layout">
        <Sidebar />
        
        <main className="content-area">
          <h2>Featured Students</h2>
          <div className="student-grid">
            <StudentCard 
              name="Jane Doe" 
              major="Computer Science" 
              gpa="3.9" 
              isActive={true}
              avatarUrl="https://placeholder.com"
            />
            <StudentCard 
              name="John Smith" 
              major="Data Science" 
              gpa="3.7" 
              isActive={false}
              avatarUrl="https://placeholder.com"
            />
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
*/

import Header from './components/Header';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';
import  Profile  from './components/profile';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Profile />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
