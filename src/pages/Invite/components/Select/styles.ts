import styled, { css } from 'styled-components';

interface OptionsProps {
  isSelected: boolean;
}

interface ContainerProps {
  optionsIsOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 40rem;
  position: relative;

  .inputSelect {
    z-index: 99;

    h1 {
      color: black;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 2rem;
      color: var(--black);

      width: 100%;
      display: flex;
    }
  }

  button {
    border: none;
    background: none;
  }

  button.selectedValue {
    background-color: var(--soft-gray);
    border-radius: 1.25rem;
    width: 100%;
    max-width: 40rem;
    height: 4.063rem;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.7s all;

    ${props =>
      props.optionsIsOpen &&
      css`
        transition: 0.7s all;
        border: 1px solid #000;
      `}

    p {
      margin: 0;
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 28px;
      display: flex;
      align-items: center;
      text-align: center;

      color: #373435;
    }
  }
`;

export const SelectContainer = styled.ul`
  position: absolute;
  list-style: none;
  width: 100%;
  max-width: 40rem;
  margin-top: 6rem;
  background: #f5f5f6;
  border-radius: 0 0 12px 12px;
`;

export const Option = styled.li<OptionsProps>`
  padding: 5px 0;
  cursor: pointer;

  transition: 0.4s all;

  &:hover {
    transition: 0.4s all;

    background: #373435;
    color: #f5f5f6;
  }

  &:first-child {
    padding: 1.5rem 0 0.5rem;
  }

  &:last-child {
    border-radius: 0 0 12px 12px;
  }

  button {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;

    width: 100%;
    height: 4.063rem;
    display: flex;
    justify-content: center;
  }

  ${props =>
    props.isSelected &&
    css`
      background: #373435;
      color: #f5f5f6;
    `}
`;
