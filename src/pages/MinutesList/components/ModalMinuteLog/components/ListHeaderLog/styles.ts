import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 82rem;
  width: 100%;
  margin: 0 0 1.5rem 0;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3.75rem;

    strong {
      color: white;
      font-size: 1.5rem;
    }
  }

  .modification {
    background: var(--red-pink);
    border-radius: 1.25rem 0 0 1.25rem;
    width: 30%;
  }

  .date {
    background: #fa6b90;
    width: 20%;
  }

  .modified-by {
    background: #cecfd0;
    border-radius: 0 1.25rem 1.25rem 0;
    width: 50%;
  }
`;
