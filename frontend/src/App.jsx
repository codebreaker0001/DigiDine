import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import User from './pages/User/User';
import NotFound from './components/NotFound';
import RestaurentMenu from './pages/User/RestaurentMenu';
import DishPage from './pages/Admin/dishes/dishes';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import RestaurentData from './pages/Admin/RestaurentData/RestaurentData';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="customer" element={<User />} />
          <Route path="signup" element={<Signup />} />
          <Route path="customer/:restaurentId" element={<RestaurentMenu />}/>
          <Route path="admin" element={<RestaurentData/>} />
        </Route>
        <Route path="*" element={<NotFound />}/>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
