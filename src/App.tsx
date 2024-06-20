import { Suspense, lazy, useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import ECommerce from './pages/Dashboard/ECommerce';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import routes from './routes';
import React from 'react';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const authTokenString: any = localStorage.getItem('AuthToken');

    // Convert the JSON string back to an object
    const auth: any = JSON.stringify(authTokenString);

    if (localStorage.getItem('Token') && auth?.authToken != '') {
      setIsLogin(true);
      navigate('*');
    } else setIsLogin(false);
  }, []);

  if (!localStorage.getItem('Token'))
    return (
      <>
        <Toaster
          position="top-right"
          reverseOrder={false}
          containerClassName="overflow-auto"
        />
        <Routes>
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/auth/signin" replace />} />
        </Routes>
      </>
    );

  if (localStorage.getItem('AuthToken'))
    return (
      <>
        <Toaster
          position="top-right"
          reverseOrder={false}
          containerClassName="overflow-auto"
        />
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<ECommerce />} />
            {routes.map((routes, index) => {
              const { path, component: Component } = routes;
              return (
                <Route
                  key={index}
                  path={path}
                  element={
                    <Suspense>
                      <Component />
                    </Suspense>
                  }
                />
              );
            })}
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </>
    );
}

export default App;
