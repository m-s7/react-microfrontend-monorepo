import ShellProvider, { ShellContextProps } from 'shared-context';
import App from './app';

const Entrypoint = (props: ShellContextProps) => {
  return (
    <ShellProvider {...props}>
      {props.authToken}
      <App />
    </ShellProvider>
  );
};

export default Entrypoint;
