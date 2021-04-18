import styled from 'styled-components';

const StyledBoxInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-height: 4.063rem;

  background-color: var(--red-pink);
  border-radius: 1.25rem;

  margin: 0.5rem 1rem 0.5rem 0;
  padding: 0 15px;

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }

  h4 {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    color: #fff;
    font-size: 1rem;
    font-weight: 900;
    margin: 0;

    height: 4.063rem;
  }

  button {
    border: none;
    background: none;

    height: 1.875rem;

    img {
      height: 1.875rem;
    }
  }
`;

export default StyledBoxInformation;
