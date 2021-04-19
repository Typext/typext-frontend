/* eslint-disable prettier/prettier */
import styled from 'styled-components';

const StyledSubjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  width: 102.125rem;

  background-color: #ffffff;
  border-radius: 20px;

  padding: 3rem;

  h1 {
    color: var(--black);
    font-size: 3rem;
    font-weight: bold;
  }

  .subjects {
    display: flex;
    flex-direction: column;

    max-width: 102.125rem;
    width: 100%;

    button {
      margin: 0.625rem 0;
    }

    .content {
      padding: 0 0.625rem 0 0;

      div {
        margin: 0.625rem 0;
        display: flex;
        width: 100%;
        justify-content: space-between;
      }

      .subject {
        background: #f8f8f8;
        padding: 1rem 0;

        font-family: Roboto;
        font-weight: bold;
        font-size: 1.3rem;

        color: #373435;

        span {
          display: -webkit-box;

          padding: 4px 10px;

          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        span:nth-child(1) {
          text-align: center;
          width: 35%;
          border-radius: 1.25rem 0 0 1.25rem;
        }

        span:nth-child(2) {
          text-align: center;
          width: 30%;
        }

        span:nth-child(3) {
          text-align: center;
          width: 35%;
          border-radius: 0 1.25rem 1.25rem 0;
        }
      }

      div.titles {
        span {
          text-align: center;
          padding: 1rem 0;

          font-family: Roboto;
          font-style: normal;
          font-weight: bold;
          font-size: 1.5rem;
          text-align: center;

          color: #ffffff;
        }

        span:nth-child(1) {
          background: #f60846;
          width: 35%;

          border-radius: 1.25rem 0 0 1.25rem;
        }

        span:nth-child(2) {
          background: rgba(246, 8, 70, 0.6);
          width: 30%;
        }

        span:nth-child(3) {
          background: #cecfd0;
          width: 35%;
          border-radius: 0 1.25rem 1.25rem 0;
        }
      }
    }
  }

  @media (max-width: 960px) {
    max-width: 100vw;
  }
`;

export default StyledSubjects;
