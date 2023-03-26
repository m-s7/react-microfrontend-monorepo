import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Home } from './pages';
import { Layout } from './layouts';
import { LdsLoader } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SuspenseContainer } from './app.styled';
import SharedContext from 'shared-context';
const Admin = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 750));

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return import('admin/Admin');
});
const Health = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return import('health/Health');
});

const Settings = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return import('settings/Settings');
});

export const App = () => {
  const [name, setName] = useState('initial');

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setName(`new-name-${Math.random()}`);
    }, 2500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <SharedContext.Provider value={{ name }}>
      <Suspense
        fallback={
          <SuspenseContainer>
            <LdsLoader />
          </SuspenseContainer>
        }
      >
        <Settings />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin test="www" />} />
              <Route path="/health" element={<Health />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </SharedContext.Provider>
  );
};
