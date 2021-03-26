import React from "react";
import Initial from "../../components/Initial/Initial";
import ProjectInformation from "../../components/ProjectInformation/ProjectInformation";

import Container from "./styles";

const Main = () => {
  return(
    <Container>
      <Initial />
      <ProjectInformation />
    </Container>
  );
};

export default Main;
