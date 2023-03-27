import React from 'react';
import { ShellContextProps } from 'shared-context';
import { isEven } from 'is-even';

const getIsEventText = (num: number): string => (isEven(num) ? 'Yes' : 'No');

export const Index = (props: ShellContextProps) => {
  return (
    <>
      {props.authToken}
      <h1>Settings</h1>
      <div>Is 5 even: {getIsEventText(3)}</div>
      <div>Is 6 even: {getIsEventText(4)}</div>
    </>
  );
};

export default Index;
