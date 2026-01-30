import { Link, Outlet, useLocation } from "react-router-dom";
import "./components.css";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">MyApp</div>
        <nav className="topnav">
          <Link to="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link to="/users" className={pathname.startsWith("/users") ? "active" : ""}>
            Users
          </Link>
          <Link to="/register" className={pathname === "/register" ? "active" : ""}>
            Register
          </Link>
        </nav>
      </header>

      <main className="main-area">
        <Outlet />
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} MyApp — Professional demo</small>
      </footer>
    </div>
  );
};

export default Layout;
