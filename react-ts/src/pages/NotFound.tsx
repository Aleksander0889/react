import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main>
      <h1>404</h1>
      <Link to="/">GO HOME</Link>
    </main>
  );
}

export default NotFound;
