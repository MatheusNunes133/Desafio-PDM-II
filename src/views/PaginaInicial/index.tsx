import React, { useEffect } from "react";
import { BackHandler } from "react-native";
import Icone from "react-native-vector-icons/MaterialIcons";

import {
  Header,
  QtdTarefas,
  Title,
  ContainerHeader,
  Input,
  Container,
  ContainerInput,
  Button,
} from "../../global/styles/PaginaInicial/paginaInicial";

export default function PaginaInicial() {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  });
  return (
    <Container>
      <Header>
        <ContainerHeader>
          <Title>To.do</Title>
          <QtdTarefas>Você tem 5 tarefas</QtdTarefas>
        </ContainerHeader>
      </Header>
      <ContainerInput>
        <Input value={"Adicione uma tarefa"} />
        <Button>
          <Icone name="keyboard-arrow-right" size={30} color="#B2B2B2" />
        </Button>
      </ContainerInput>
    </Container>
  );
}
