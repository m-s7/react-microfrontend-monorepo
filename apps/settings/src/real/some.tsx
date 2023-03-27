import { ShellContextProps } from 'shared-context';

export const Home = (props: ShellContextProps) => {
  return (
    <>
      <p>SETTINGS2!!!</p>
      <p>{props.authToken}</p>
    </>
  );
};

export default Home;
