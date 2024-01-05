import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Book from "./src/books";
import {
  Container,
  Logo,
  Title,
  Input,
  CenterView,
  Botao,
  BotaoText,
  List,
} from "./src/styles";
import { useEffect, useState } from "react";

export default function App() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [books, setBooks] = useState([]);

  function addBook() {
    alert("Adicionou");
  }

  useEffect(() => {}, []);

  return (
    <Container>
      <StatusBar style="auto" />
      <Logo>Proximos livros</Logo>

      <Title>Nome</Title>
      <Input
        autoCapitalize="none"
        autoCorret={false}
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <Title>Preço</Title>
      <Input
        autoCapitalize="none"
        autoCorret={false}
        value={preco}
        onChangeText={(text) => setPreco(text)}
      />

      <CenterView>
        <Botao onPress={addBook}>
          <BotaoText>Cadastrar</BotaoText>
        </Botao>

        <Botao onPress={() => {}}>
          <BotaoText>Editar</BotaoText>
        </Botao>
      </CenterView>

      <List
        data={books}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Book data={item} />}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
