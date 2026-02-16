import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/user">User Details</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<UserDetails />} />
      </Routes>
    </div>
  );
};

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Routing</td>
            <td>Working</td>
          </tr>
          <tr>
            <td>Navigation</td>
            <td>Active</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}


function About() {
  return (
    <div>
      <h1>About Page</h1>

      <table border="1">
        <tr>
          <th>Technology</th>
          <th>Purpose</th>
        </tr>
        <tr>
          <td>React</td>
          <td>Frontend</td>
        </tr>
        <tr>
          <td>React Router</td>
          <td>Navigation</td>
        </tr>
      </table>

    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>

      <table border="1">
        <tr>
          <th>Type</th>
          <th>Details</th>
        </tr>
        <tr>
          <td>Email</td>
          <td>example@email.com</td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>9876543210</td>
        </tr>
      </table>

    </div>
  );
}


function UserDetails() {
  return (
    <div>
      <h1>User Details Page</h1>

      <table border="1">
        <tr>
          <th>Name</th>
          <th>Course</th>
        </tr>
        <tr>
          <td>Shashank</td>
          <td>B.E CSE</td>
        </tr>
      </table>

    </div>
  );
}


export default App;


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
