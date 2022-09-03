import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  height: 48px;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  margin: 5% 0 1% 0;
`;

export const ContainerInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextInfo = styled.Text`
text-decoration: ${(props) => {
  return props.checked ? "line-through" : "none";
}}
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => {
    return props.checked ? "#1DB863" : "#666666";
  }};
  margin-bottom: 3px;
`;

export const Trash = styled.TouchableOpacity``;
