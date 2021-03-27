import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 150px;

  border: 1px solid #1a1a1a;

  display: flex;

  .minuteID,
  .logo {
    width: 20%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dateAndLocateInfo {
    height: 100%;
    width: 60%;
    margin: 0;
    padding: 20px;
    border-right: 1px solid #1a1a1a;
    border-left: 1px solid #1a1a1a;

    .date,
    .hour,
    .hour div,
    .meetingLocate {
      display: flex;
    }

    .hour .startHour {
      margin-right: 30px;
    }
  }
`;
