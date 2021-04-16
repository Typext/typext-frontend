import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;
