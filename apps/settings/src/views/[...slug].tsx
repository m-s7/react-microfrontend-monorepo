import Link from 'next/link';
import { useRouter } from 'next/router';
import General from './general';

export const Slug = () => {
  const router = useRouter();
  console.log(router.query);
  // const basePath = (router.query as { slug: Array<string> }).slug[0];

  // console.log(basePath);

  // if (basePath === 'general') return <General />;

  return (
    <div>
      SZLUG
      <Link href="general/test">New page</Link>
    </div>
  );
};

export default Slug;
