import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import styles from '../styles/DetalhesVeiculoStyle';
import { useDetalhesVeiculo } from '../components/DetalhesVeiculo';
import { editarCarro, deletarCarro } from '../service/carServices';
import ExcluirModal from '../components/ExcluirModal';

const { width: screenWidth } = Dimensions.get('window');

export default function DetalhesVeiculo({ route, navigation }) {
  const { carro } = route.params || {};
  const { descricao } = useDetalhesVeiculo(carro);

  const [nome, setNome] = useState(carro?.nome || '');
  const [modelo, setModelo] = useState(carro?.modelo || '');
  const [cor, setCor] = useState(carro?.cor || '');
  const [ano, setAno] = useState(String(carro?.ano || ''));
  const [preco, setPreco] = useState(String(carro?.preco || ''));
  const [imagem, setImagem] = useState(carro?.imagem || '');
  const [modalVisivel, setModalVisivel] = useState(false);

  if (!carro) {
    return (
      <View style={styles.container}>
        <Text style={styles.nome}>Carro não encontrado</Text>
      </View>
    );
  }

  const handleConcluir = async () => {
    const dadosAtualizados = {
      nome,
      modelo,
      cor,
      ano: parseInt(ano),
      preco: parseInt(preco),
      imagem,
    };

    try {
      await editarCarro(carro._id, dadosAtualizados);
      Alert.alert('Sucesso', 'Carro atualizado com sucesso!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Erro ao atualizar carro.');
    }
  };

  const confirmarExclusao = async () => {
    try {
      await deletarCarro(carro._id);
      setModalVisivel(false);
      Alert.alert('Removido', 'Carro excluído com sucesso!');
      navigation.goBack();
    } catch (error) {
      setModalVisivel(false);
      Alert.alert('Erro', 'Erro ao excluir carro.');
    }
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: imagem }} style={styles.imagem} resizeMode="contain" />

        <TouchableOpacity onPress={() => navigation.navigate("ListaVeiculos")}>
          <Text style={styles.nome}>{nome}</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Nome"
        />
        <TextInput
          style={styles.input}
          value={modelo}
          onChangeText={setModelo}
          placeholder="Modelo"
        />
        <TextInput
          style={styles.input}
          value={cor}
          onChangeText={setCor}
          placeholder="Cor"
        />
        <TextInput
          style={styles.input}
          value={ano}
          onChangeText={setAno}
          placeholder="Ano"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={preco}
          onChangeText={setPreco}
          placeholder="Preço"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={imagem}
          onChangeText={setImagem}
          placeholder="URL da imagem"
        />

        <TouchableOpacity style={styles.botaoConcluir} onPress={handleConcluir}>
          <Text style={styles.textoBotao}>Editar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoExcluir} onPress={() => setModalVisivel(true)}>
          <Text style={styles.textoBotaoExcluir}>Excluir</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal fora do ScrollView */}
      <ExcluirModal
        visible={modalVisivel}
        onConfirm={confirmarExclusao}
        onCancel={() => setModalVisivel(false)}
      />
    </>
  );
}
