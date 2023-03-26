import React from 'react';
import dynamic from 'next/dynamic';
import { Layout } from '../../layouts';
import { ShellProps } from 'shared-context';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const HealthRemote = dynamic<ShellProps>(import('health/Health'), { ssr: false });

export const Health = () => {
  return <HealthRemote authToken="hello!" />;
};

Health.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Health;
