import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from '../../styles/LitaCarrosStyle';

export default function CarroCard({ carro, onDetalhes }) {
  const [imgHeight, setImgHeight] = useState(200); // altura padrão inicial
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (carro.imagem) {
      Image.getSize(
        carro.imagem,
        (width, height) => {
          const displayWidth = 300; // mesmo valor definido no estilo
          const ratio = height / width;
          setImgHeight(displayWidth * ratio);
          setLoading(false);
        },
        (error) => {
          console.error('Erro ao carregar imagem:', error);
          setImgHeight(200); // fallback
          setLoading(false);
        }
      );
    }
  }, [carro.imagem]);

  return (
    <TouchableOpacity onPress={onDetalhes} style={styles.card}>
      <Text style={styles.nome}>{carro.nome}</Text>
      <Text style={{ fontSize: 12, marginBottom: 10 }}>Ver detalhes | Editar</Text>

      {carro.imagem ? (
        loading ? (
          <ActivityIndicator size="small" />
        ) : (
          <Image
            source={{ uri: carro.imagem }}
            style={[styles.imagem, { height: imgHeight }]}
            resizeMode="contain"
          />
        )
      ) : (
        <Text style={{ textAlign: 'center', color: 'red' }}>Sem imagem</Text>
      )}
    </TouchableOpacity>
  );
}
