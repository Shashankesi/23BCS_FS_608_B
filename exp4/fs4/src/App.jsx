// import { Routes, Route, Link } from "react-router-dom";
// // // Lazy Loading Pages
// // const Home = lazy(() => import("./pages/Home"));
// // const About = lazy(() => import("./pages/About"));
// // const Contact = lazy(() => import("./pages/Contact"));
// // const UserDetails = lazy(() => import("./pages/UserDetails"));
// import "./App.css";

import { UNSAFE_getPatchRoutesOnNavigationFunction } from "react-router-dom";

// const App = () => {
//   return (
//     <div>
//       <nav>
//         <Link to="/">Home</Link> |{" "}
//         <Link to="/about">About</Link> |{" "}
//         <Link to="/contact">Contact</Link> |{" "}
//         <Link to="/user">User Details</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/user" element={<UserDetails />} />
//       </Routes>
//     </div>
//   );
// };


// function Home() {
//   return (
//     <div>
//       <h1>Home Page</h1>

//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//         Quisquam, voluptatibus temporibus aliquid accusamus 
//         consequuntur minus earum nemo distinctio.
//       </p>

//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>City</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Rahul</td>
//             <td>21</td>
//             <td>Delhi</td>
//           </tr>
//           <tr>
//             <td>Aman</td>
//             <td>22</td>
//             <td>Mumbai</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h1>About Page</h1>

//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Voluptatem, accusantium. Dolorum, eaque. Cumque, facilis.
//         Asperiores doloremque voluptas repellendus.
//       </p>

//       <table>
//         <thead>
//           <tr>
//             <th>Course</th>
//             <th>Duration</th>
//             <th>Mode</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>B.Tech</td>
//             <td>4 Years</td>
//             <td>Full Time</td>
//           </tr>
//           <tr>
//             <td>MCA</td>
//             <td>2 Years</td>
//             <td>Regular</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// function Contact() {
//   return (
//     <div>
//       <h1>Contact Page</h1>

//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Eligendi molestiae perspiciatis natus.
//       </p>

//       <table>
//         <thead>
//           <tr>
//             <th>Type</th>
//             <th>Details</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Email</td>
//             <td>info@example.com</td>
//           </tr>
//           <tr>
//             <td>Phone</td>
//             <td>9876543210</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// function UserDetails() {
//   return (
//     <div>
//       <h1>User Details Page</h1>

//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Repellendus, porro distinctio.
//       </p>

//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>City</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Shashank</td>
//             <td>20</td>
//             <td>Chandigarh</td>
//           </tr>
//           <tr>
//             <td>Riya</td>
//             <td>19</td>
//             <td>Pune</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }


// export default App;


// import { lazy, Suspense } from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import "./App.css";

// // Lazy Loading Pages
// const Home = lazy(() => import("./pages/Home"));
// const About = lazy(() => import("./pages/About"));
// const Contact = lazy(() => import("./pages/Contact"));
// const UserDetails = lazy(() => import("./pages/UserDetails"));

// function App() {
//   return (
//     <div>
//       {/* Navigation
//       <nav className="navbar">
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/user">User Details</Link>
//       </nav> */}

//       {/* Suspense Wrapper */}
//       <Suspense fallback={<div className="loader">Loading Page...</div>}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/user" element={<UserDetails />} />
//         </Routes>
//       </Suspense>
//     </div>
//   );
// }

// export default App;

import React from 'react'

const useRef = () => {
const[count, setCount] = React.useState(0);
const countRef = React.useRef(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Count Ref: {countRef.current}</h1>

      <button onClick={() => {
        setCount(count + 1);
        countRef.current += 1;
      }}>Increment</button>
    </div>
  )
}

export default useRef
