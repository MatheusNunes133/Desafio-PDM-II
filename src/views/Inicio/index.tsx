import React, { useEffect } from "react";

import {
  Container,
  Title,
  StatusBar,
  SubTitle,
} from "../../global/styles/Inicio/inicio";

export default function Inicio({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 4000);
  });
  return (
    <Container>
      <StatusBar backgroundColor={"#8257e5"} barStyle={"light-content"} />
      <Title>To.Do</Title>
      <SubTitle>Seu aplicativo favorito de afarezes</SubTitle>
    </Container>
  );
}
