import React from 'react';
import dynamic from 'next/dynamic';
import { Layout } from '../../layouts';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const AdminRemote = dynamic(import('admin/Admin'), { ssr: false });

export const Admin = () => {
  return <AdminRemote />;
};

Admin.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Admin;
