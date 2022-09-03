import React, { useState } from "react";
import Icone from "react-native-vector-icons/MaterialCommunityIcons";
import { Checkbox } from "react-native-paper";

import {
  Container,
  ContainerInfo,
  TextInfo,
  Trash,
} from "../../global/styles-components/Cards/cards";

export default function Cards(props) {
  const [checked, setChecked] = useState(false);

  function checkTitle(title) {
    if (title != "") {
      return title;
    }
  }
  return (
    <Container>
      <ContainerInfo>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(!checked);
          }}
          color={"#1DB863"}
        />
        <TextInfo checked={checked}>{checkTitle(props.title.item)}</TextInfo>
      </ContainerInfo>
      <Trash>
        <Icone
          name="trash-can-outline"
          size={23}
          color={"#B2B2B2"}
          style={{ marginRight: 25 }}
        />
      </Trash>
    </Container>
  );
}
