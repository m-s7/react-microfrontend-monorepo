import React from 'react';
import dynamic from 'next/dynamic';
import { Layout } from '../../layouts';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const HealthRemote = dynamic(import('health/Health'), { ssr: false });

export const Health = () => {
  return <HealthRemote />;
};

Health.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Health;
