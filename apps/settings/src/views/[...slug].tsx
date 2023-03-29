'use client';

import { useRouter } from 'next/router';
import General from '../pages/general';
import { getRouteElement, Route } from '../utils';

const routes: Route[] = [{ path: 'general', element: General }];

export const Slug = () => {
  const { asPath, query } = useRouter();

  if ('slug' in query) {
    console.log(123, asPath);
    const Element = getRouteElement(routes, asPath);

    if (Element) return <Element />;
  }

  return <div>404</div>;
};

export default Slug;
