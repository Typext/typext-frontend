import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;

  .Home {
    display: grid;
    grid-template-columns: 1fr 33.75rem;
    gap: 3rem;

    max-width: 120rem;
    width: 100%;

    .Calendar {
      h1 {
        font-family: Roboto;
        font-size: 1.875rem;
        font-style: normal;
        font-weight: 900;
        color: var(--black);
      }

      .ant-picker-calendar.ant-picker-calendar-full {
        width: 100%;
        max-height: 75vh;

        padding: 0.5rem;

        border: solid 1rem var(--gray);
        border-radius: 1.25rem;

        .ant-picker-calendar-header {
          padding: 0.75rem 0;
        }

        .ant-picker-calendar-date-content {
          height: 7.18vh;
        }
      }
    }

    .Buttons {
      margin-top: 3.125rem;

      button {
        margin-bottom: 2rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;
