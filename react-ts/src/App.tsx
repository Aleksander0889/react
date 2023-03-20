import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About Us';
import Layout from './components/Layot';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
