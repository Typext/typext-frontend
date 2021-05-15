import React, { useState } from 'react';

// eslint-disable-next-line
import MinuteViewer from 'components/organisms/MinuteViewer';
import MinuteFields from 'components/templates/MinuteFields';
import ScheduleModal from './components/ScheduleModal';
import OptionButtons from './components/OptionButtons';

const Main = () => {
  const [showMinute, setShowMinute] = useState(false);
  const [showSchedule, setShowSchedule] = useState(false);

  return (
    <>
      {showMinute && <MinuteViewer setShowMinute={setShowMinute} />}

      {showSchedule && <ScheduleModal setShowSchedule={setShowSchedule} />}

      <MinuteFields />
      <OptionButtons
        setShowSchedule={setShowSchedule}
        setShowMinute={setShowMinute}
      />
    </>
  );
};

export default Main;
