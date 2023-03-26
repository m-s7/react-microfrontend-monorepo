import React from 'react';
import dynamic from 'next/dynamic';
import { Layout } from '../../layouts';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const SettingsRemote = dynamic(import('settings/Settings'), { ssr: false });

export const Settings = () => {
  return <SettingsRemote />;
};

Settings.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Settings;
