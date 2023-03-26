import dynamic from 'next/dynamic';
const page = import('../real/index');

const Page = dynamic(() => import('../real/index'), { suspense: true });
// @ts-ignore
Page.getInitialProps = async ctx => {
  // @ts-ignore
  const getInitialProps = (await page).default?.getInitialProps;
  if (getInitialProps) {
    return getInitialProps(ctx);
  }
  return {};
};
export default Page;