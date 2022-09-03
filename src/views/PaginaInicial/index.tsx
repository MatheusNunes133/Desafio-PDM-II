import React, { useEffect, useState } from "react";
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
  ContainerTasks,
} from "../../global/styles/PaginaInicial/paginaInicial";

import Cards from "../../components/Cards";

export default function PaginaInicial() {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  });
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  function addTask() {
    let list = [...data];
    list.push(text);
    setData(list);
    setText("");
  }

  function renderItem(item) {
    return <Cards title={item}></Cards>;
  }
  return (
    <Container>
      <Header>
        <ContainerHeader>
          <Title>To.do</Title>
          <QtdTarefas>
            Você tem {data.length} {data.length == 1 ? "Tarefa" : "Tarefas"}
          </QtdTarefas>
        </ContainerHeader>
      </Header>
      <ContainerInput>
        <Input
          onChangeText={(valueText) => {
            setText("");
            setText(valueText);
          }}
          value={text}
          placeholder="Adicione uma tarefa"
        />
        <Button onPress={addTask}>
          <Icone name="keyboard-arrow-right" size={30} color="#B2B2B2" />
        </Button>
      </ContainerInput>
      <ContainerTasks
        data={data}
        keyExtractor={(item) => item}
        renderItem={renderItem}
      ></ContainerTasks>
    </Container>
  );
}
