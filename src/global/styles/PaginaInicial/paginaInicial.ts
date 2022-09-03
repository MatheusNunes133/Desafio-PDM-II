import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
`;

export const Header = styled.View`
  height: 150px;
  background-color: #8257e5;
`;

export const ContainerHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5% 5% 0 5%;

  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: #fff;
`;

export const QtdTarefas = styled.Text`
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  color: #fff;
`;

export const ContainerInput = styled.View`
  display: flex;
  flex-direction: row;
  margin: -10% 5% 0 5%;
  background-color: #fff;
  border-radius: 5px;
`;

export const Input = styled.TextInput`
  height: 60px;
  width: 80%
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
  color: #b2b2b2;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 20%;
  background-color: #fff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-width: 2px;
  border-left-color: #ebebeb;
`;

export const ContainerTasks = styled.FlatList``;
