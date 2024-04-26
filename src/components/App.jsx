import { MainLayout } from 'layouts/MainLayout';
// import { Home } from 'pages/Home';

import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
// import { Cast } from './Cast';
// import { MovieDetails } from 'pages/MovieDetails';
// import { Movies } from 'pages/Movies';
// import { Reviews } from './Reviews';
const Home = lazy(() => import('pages/Home'));
const Reviews = lazy(() => import('./Reviews'));
const Cast = lazy(() => import('./Cast'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};
