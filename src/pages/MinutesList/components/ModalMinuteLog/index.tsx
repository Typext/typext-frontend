import React, { useEffect } from 'react';

import warnIcon from 'assets/warn.svg';
import exitIcon from 'assets/exit_logo_red.svg';

import { useMinute } from 'contexts/minute';
import Loader from 'components/molecules/Loader';
import { Container, Modal, ListContent } from './styles';
import ListHeaderLog from './components/ListHeaderLog';
import LogInfo from './components/LogInfo';

export interface IModalMinuteLog {
  onClose: () => void;
  isOpen: boolean;
  id: number;
}

const ModalMinuteLog: React.FC<IModalMinuteLog> = ({
  onClose,
  isOpen,
  id,
}: IModalMinuteLog) => {
  const {
    minuteLogs,
    minuteLogsError,
    minuteLogsLoader,
    getMinuteLogs,
  } = useMinute();

  useEffect(() => {
    getMinuteLogs(id);
  }, [getMinuteLogs, id]);

  return (
    <Container>
      <Modal isOpen={isOpen}>
        <header>
          <button type="button" onClick={onClose}>
            <img src={exitIcon} alt="exit icon" />
          </button>
        </header>

        <h1>Histórico de alterações</h1>

        <ListHeaderLog />

        <ListContent>
          {minuteLogsLoader ? (
            <Loader />
          ) : minuteLogsError === '' ? (
            <>
              {minuteLogs?.map(log => (
                <LogInfo
                  key={log.id}
                  modification={log.registered_action}
                  date={log.updated_at
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('/')}
                  modifiedBy={log.created_at}
                />
              ))}
            </>
          ) : (
            <div className="warn">
              <img src={warnIcon} alt="" />
              <h1>OCORREU UM PROBLEMA</h1>
              <h3>{minuteLogsError?.toUpperCase()}</h3>
            </div>
          )}
        </ListContent>
      </Modal>
    </Container>
  );
};

export default ModalMinuteLog;
