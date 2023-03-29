import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import { Layout } from '../../layouts';
import { ShellContextProps } from 'shared-context';
import { AuthContext } from '../../business';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const SettingsRemote = dynamic<ShellContextProps>(import('settings/Settings/[...slug]'), { ssr: false });

export const General = () => {
  const { authToken } = useContext(AuthContext);

  return <SettingsRemote authToken={authToken} />;
};

General.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default General;
