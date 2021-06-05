import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 81.375rem;
  width: 100%;
  height: 4.375rem;
  margin-bottom: 3.375rem;
  border-radius: 1.25rem;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100%;
    border: none;
    padding: 0 1rem;

    font-family: Roboto;
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 1.75rem;
    text-align: center;

    color: white;

    img {
      height: 1.875rem;
    }

    .spacing {
      height: 1.875rem;
      width: 1.875rem;
    }
  }

  .title {
    width: 25%;
    background: var(--red-pink);
    border-radius: 1.25rem 0 0 1.25rem;
  }

  .date {
    width: 20%;
    background: #fa6b90;
  }

  .status {
    width: 20%;
    background: #fb9cb5;
  }

  .schedule {
    width: 35%;
    background: var(--gray);
    border-radius: 0 1.25rem 1.25rem 0;
  }
`;
