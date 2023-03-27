import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import { Layout } from '../../layouts';
import { ShellContextProps } from 'shared-context';
import { AuthContext } from '../../business';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const AdminRemote = dynamic<ShellContextProps>(import('admin/Admin'), { ssr: false });

export const Admin = () => {
  const { authToken } = useContext(AuthContext);

  return <AdminRemote authToken={authToken} />;
};

Admin.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Admin;
