import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 1440px;
    padding: 4rem 7rem;
    gap: 6.125rem;

    .head {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 18rem;
        height: 3rem;
      }
    }

    .hero {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-top: 5rem;

      .left {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.875rem;

        #illustration {
          width: 37.5rem;
          height: 37.5rem;
        }
        h3 {
          letter-spacing: 0.2rem;
          font-size: 1.5rem;
          color: #373435;
          width: 100%;
          max-width: 23.3rem;
          text-align: center;
          font-weight: 400;
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        max-width: 50rem;

        strong {
          color: var(--red-pink);
        }

        h1 {
          font-size: 3.75rem;
          text-align: center;
        }

        .steps {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f5f5f5;
          border-radius: 1.25rem;
          padding: 3rem;
          gap: 5rem;
          margin-bottom: 4rem;

          .step {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            height: 100%;
            width: 100%;
            max-width: 12rem;
            max-height: 3.4rem;

            img {
              height: 3.4rem;
            }

            p {
              margin: 0;
              font-size: 1.25rem;
            }
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    .content {
      .hero {
        flex-direction: column;
        gap: 5rem;

        .right {
          gap: 5rem;
          max-width: 100%;

          .steps {
            width: 100%;
            max-width: 100%;

            .step {
              max-width: 100%;
              justify-content: flex-start;
            }
          }
        }
      }
    }
  }

  @media (max-width: 505px) {
    .content {
      .hero {
        .right {
          .steps {
            flex-direction: column;
            width: 100%;
            max-width: 100%;
            .step {
              width: 100%;
              justify-content: flex-start;
            }
          }
        }
      }
    }
  }

  @media (max-width: 255px) {
    .content {
      .hero {
        .right {
          .steps {
            .step {
              flex-direction: column;
            }
          }
        }
      }
    }
  }
`;
