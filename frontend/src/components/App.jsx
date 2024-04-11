import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';
import PublicRoute from './Routes/PublicRoute/PublicRoute';
import { getToken } from '../redux/auth/authSelectors';
import WelcomePage from '../pages/WelcomePage';
import { fetchCurrentUser } from '../redux/auth/authOperations/fetchCurrentUser';

const HomePage = lazy(() => import('../pages/HomePage'));

export const App = () => {
  const dispatch = useDispatch();

  const token = useSelector(getToken);

  useEffect(() => {
    if (!token) return;
    console.log(token);
    dispatch(fetchCurrentUser());
  }, [dispatch, token]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PublicRoute component={WelcomePage} />} />

        <Route path="home" element={<PrivateRoute component={HomePage} />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
