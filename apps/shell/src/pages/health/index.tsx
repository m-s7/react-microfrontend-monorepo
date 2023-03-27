import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import { Layout } from '../../layouts';
import { ShellContextProps } from 'shared-context';
import { AuthContext } from '../../business';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const HealthRemote = dynamic<ShellContextProps>(import('health/Health'), { ssr: false });

export const Health = () => {
  const { authToken } = useContext(AuthContext);

  return <HealthRemote authToken={authToken} />;
};

Health.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Health;
