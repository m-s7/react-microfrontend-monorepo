import React from 'react';
import dynamic from 'next/dynamic';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Page = dynamic(() => import('../views/[...slug]'));

export const Slug = () => {
  return <Page />;
};

export default Slug;
