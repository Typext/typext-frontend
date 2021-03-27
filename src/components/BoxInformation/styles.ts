import styled from 'styled-components';

const StyledBoxInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-height: 4.063rem;

  background-color: var(--red-pink);
  border-radius: 20px;

  margin: 0.5rem 1rem 0.5rem 0;

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }

  h4 {
    display: flex;
    align-items: center;

    color: #fff;
    font-size: 1.5rem;
    font-weight: 900;
    margin: 0;

    height: 4.063rem;
  }

  button {
    border: none;
    background: none;

    height: 1.875rem;

    margin-right: -7rem;
    padding-left: 6rem;
  }
`;

export default StyledBoxInformation;
