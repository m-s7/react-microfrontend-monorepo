import React from 'react';
import { Home } from '@/pages';
import { Layout } from '@/layouts';
import { LdsLoader } from '@/components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SuspenseContainer } from '@/app.styled';
const Admin = React.lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 750));

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return import('admin/Admin');
});
const Health = React.lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return import('health/Health');
});

export const App = () => {
  return (
    <React.Suspense
      fallback={
        <SuspenseContainer>
          <LdsLoader />
        </SuspenseContainer>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/health" element={<Health />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
};
