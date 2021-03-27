import React from 'react';

import { Container } from './styles';

const GeneralInfo = () => {
  return (
    <Container>
      <div className="titleExamples">
        <h4 className="id">ID</h4>
        <h4 className="topic">ASSUNTO</h4>
        <h4 className="responsible">RESPONSÁVEL</h4>
        <h4 className="deadLine">PRAZO</h4>
      </div>

      <div className="topicInfo">
        <span className="id">1</span>
        <span className="topic">
          Poxa, eu tenho a melhor família do mundo. Tenho os amigos mais lindos
          e legais do mundo. Tenho muita, saúde. Tenho onde morar e o que comer,
          tenho um computador, com internet, aliás. Tenho sonhos. isso não
          parece o bastante, talvez eu precise de mais amor. Mais não pode ser
          qualquer amor tem que ser o seu amor ! Mas pra você e tudo diferente
          porque eu me preocupo com o que você sente, mesmo você pouco se
          importando se tem algo de errado comigo.
        </span>
        <span className="responsible">Maicon Cristo</span>
        <span className="deadLine">12/09/2022</span>
      </div>

      <div className="topicInfo">
        <span className="id">2</span>
        <span className="topic">
          Poxa, eu tenho a melhor família do mundo. Tenho os amigos mais lindos
          e legais do mundo. Tenho muita, saúde. Tenho onde morar e o que comer,
          tenho um computador, com internet, aliás. Tenho sonhos. isso não
          parece o bastante, talvez eu precise de mais amor. Mais não pode ser
          qualquer amor tem que ser o seu amor ! Mas pra você e tudo diferente
          porque eu me preocupo com o que você sente, mesmo você pouco se
          importando se tem algo de errado comigo.
        </span>
        <span className="responsible">Floid</span>
        <span className="deadLine">12/11/21</span>
      </div>

      <div className="topicInfo">
        <span className="id">3</span>
        <span className="topic">
          Poxa, eu tenho a melhor família do mundo. Tenho os amigos mais lindos
          e legais do mundo. Tenho muita, saúde. Tenho onde morar e o que comer,
          tenho um computador, com internet, aliás. Tenho sonhos. isso não
          parece o bastante, talvez eu precise de mais amor. Mais não pode ser
          qualquer amor tem que ser o seu amor ! Mas pra você e tudo diferente
          porque eu me preocupo com o que você sente, mesmo você pouco se
          importando se tem algo de errado comigo.
        </span>
        <span className="responsible">Rafa Moreira</span>
        <span className="deadLine">12/04/23</span>
      </div>
    </Container>
  );
};

export default GeneralInfo;
