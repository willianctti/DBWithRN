import React from "react";

import { Nome, Preco, CenterView, Botao, BotaoText, Container } from "./styles";

export default function Book({ data }) {
  return (
    <Container>
      <Nome>{data.nome}</Nome>
      <Preco>R$ {data.preco}</Preco>

      <CenterView>
        <Botao onPress={() => {}}>
          <BotaoText>Editar</BotaoText>
        </Botao>

        <Botao onPress={() => {}}>
          <BotaoText>Excluir</BotaoText>
        </Botao>
      </CenterView>
    </Container>
  );
}
