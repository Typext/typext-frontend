import React from "react";
import {StyledInitial} from "./styles";

import Input from "../Input/input";

const Initial = () => {
  return(
    
    <StyledInitial>
      <div className="Initial">
        <h1>ATA de Reunião</h1>
        <form action="">
          <Input 
            name="Local"
            data="teste"
            width={100}
            type="text"
          />

          <input type="text"/>
          <input type="date"/>
          <input type="time"/>

        </form>
      </div>
    </StyledInitial>
    
  )
}

export default Initial;