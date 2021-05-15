import styled from 'styled-components';
import { getTheme, getSize } from './Themes/index';
import { IButtonProps } from './IButtonProps';

export const Container = styled.div<IButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props: IButtonProps) => props.margin || '0'};

  .button {
    cursor: pointer;
    align-items: center;
    justify-content: center;
    transition: all ease-in-out 0.2s;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;

    ${(props: IButtonProps) => getSize(props.sizeComponent)}
    ${(props: IButtonProps) => getTheme(props.styleComponent)}
  }

  img {
    height: 1.875rem;
    padding-left: 5rem;
    margin-right: -5rem;
  }
`;

export default IButtonProps;
