import { NavLink, Outlet } from 'react-router-dom';
import './index.css';

export const MainLayout = () => {
  return (
    <>
      <nav>
        <NavLink className="NavLink" to="/">
          Home
        </NavLink>
        <NavLink className="NavLink" to="/movies">
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
