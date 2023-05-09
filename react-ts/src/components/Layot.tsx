import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <header className="header">
        <div className="logo_text"><a>ArtBioTech</a></div>
        <Link to="/" className="link_text">
          Products
        </Link>
        <Link to="about" className="link_text">
          About Us
        </Link>
        <Link to="form" className="link_text">
          Sign in
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
