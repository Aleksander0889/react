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
      <footer>
        <p className="text">2023</p>
      </footer>
    </>
  );
}

export default Layout;
