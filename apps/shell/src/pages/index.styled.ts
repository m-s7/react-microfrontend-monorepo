import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Image)`
  width: 14rem;
  height: 14rem;
  margin-bottom: 2rem;
`;

export const Heading = styled.h1`
  margin-bottom: 0.6rem;
`;

export const Text = styled.p`
  font-size: 1rem;
`;

export const HelloText = styled.p<{ isVisible: boolean }>`
  padding: 1rem;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  animation: ${(props) => (props.isVisible ? 'fadeOut' : 'fadeIn')} ease 1s;

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
