import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 82rem;
  width: 100%;
  height: 3.75rem;
  padding: 1rem 0;

  background: #f8f8f8;
  border-radius: 1.25rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 1.5rem;
    }
  }

  .modification {
    width: 30%;
  }

  .date {
    width: 20%;
  }

  .modified-by {
    width: 50%;
  }
`;
