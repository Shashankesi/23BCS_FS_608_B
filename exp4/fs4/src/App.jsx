import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Lazy Loading Pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const UserDetails = lazy(() => import("./pages/UserDetails"));

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/user">User Details</Link>
      </nav>

      {/* Suspense Wrapper */}
      <Suspense fallback={<div className="loader">Loading Page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<UserDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
