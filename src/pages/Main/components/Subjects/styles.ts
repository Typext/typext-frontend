/* eslint-disable prettier/prettier */
import styled from 'styled-components';

const StyledSubjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.875rem;

  h1 {
    color: var(--red-pink);
    font-size: 2.25rem;

    margin-bottom: 6.25rem;
  }

  .subjects {
    display: flex;
    flex-direction: column;

    max-width: 102.125rem;
    width: 100%;

    button {
      margin: 10px 0;
    }

    .content {
      padding: 0 10px;

      div {
        margin: 10px 0;
        display: flex;
        width: 100%;
        justify-content: space-between;
      }

      .subject {
        background: #f8f8f8;
        padding: 1rem 0;

        font-family: Roboto;
        font-weight: 900;
        font-size: 2rem;

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
          border-radius: 20px 0 0 20px;
        }

        span:nth-child(2) {
          text-align: center;
          width: 30%;
        }

        span:nth-child(3) {
          text-align: center;
          width: 35%;
          border-radius: 0 20px 20px 0;
        }
      }

      div.titles {
        span {
          text-align: center;
          padding: 1rem 0;

          font-family: Roboto;
          font-style: normal;
          font-weight: 900;
          font-size: 2rem;
          line-height: 28px;
          text-align: center;

          color: #ffffff;
        }

        span:nth-child(1) {
          background: #f60846;
          width: 35%;

          border-radius: 20px 0 0 20px;
        }

        span:nth-child(2) {
          background: rgba(246, 8, 70, 0.6);
          width: 30%;
        }

        span:nth-child(3) {
          background: #cecfd0;
          width: 35%;
          border-radius: 0 20px 20px 0;
        }
      }
    }
  }
`;

export default StyledSubjects;
