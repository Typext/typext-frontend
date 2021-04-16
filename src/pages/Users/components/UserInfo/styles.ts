import styled from 'styled-components';

export const Container = styled.button`
  span {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 2rem;
    line-height: 28px;
    text-align: center;

    color: #373435;

    width: 100%;
  }
`;
