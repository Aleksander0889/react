import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header className="header">
        <Link to="/" className="link_text">
          HOME
        </Link>
        <Link to="about" className="link_text">
          About Us
        </Link>
      </header>
      <Outlet />
      <footer>2023</footer>
    </>
  );
}

export default Layout;
