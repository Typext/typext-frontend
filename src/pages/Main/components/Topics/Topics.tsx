/* eslint-disable prettier/prettier */
import React from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import BoxInformation from 'components/BoxInformation/BoxInformation';
import ScrollBox from 'components/ScrollBox/ScrollBox';
import addIcon from '../../../../assets/add_icon.svg';

import StyledTopics from './styles';

const Topics = () => {
  return (
    <StyledTopics>
      <h1>Pauta</h1>

      <div className="Topic">

        <div className="AddTopic">
          <Input
            title="Pauta"
            Size="large"
            color="black"
            styleWidth="large"
          />

          <Button
            color="var(--soft-pink)"
            colorText="var(--red-pink)"
            size="23.75rem"
          >
            Adicionar
            <img src={addIcon} alt="" />
          </Button>
        </div>

        <div className="TopicList">

          <ScrollBox>
            <BoxInformation>
              <h4>Pauta 01</h4>
            </BoxInformation>

            <BoxInformation>
              <h4>Pauta 02</h4>
            </BoxInformation>

            <BoxInformation>
              <h4>Pauta 03</h4>
            </BoxInformation>

            <BoxInformation>
              <h4>Pauta 04</h4>
            </BoxInformation>

            <BoxInformation>
              <h4>Pauta 05</h4>
            </BoxInformation>

          </ScrollBox>
        </div>

      </div>
    </StyledTopics>

  );
};

export default Topics;
