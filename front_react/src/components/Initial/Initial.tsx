import React from "react";
import {StyledInitial} from "./styles";

import Input from "../Input/Input";

const Initial = () => {
  return(
    <StyledInitial>
      <div className="Initial">
        <h1>ATA de Reunião</h1>
        <form action="">
          <Input 
            title="Local"
            styleWidth="large"
            type="text"
          />

          <Input 
            title="Data de Inicio"
            styleWidth="medium"
            type="date"
          />

          <Input
            title="Horário de Inicio"
            styleWidth="medium"
            type="time"
          />
        </form>
      </div>
    </StyledInitial>
  )
}

export default Initial;