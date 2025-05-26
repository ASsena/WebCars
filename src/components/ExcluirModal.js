import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import styles from '../styles/ModalExcluirStyle';


const ExcluirModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Excluir da coleção</Text>

          <View style={styles.alertBox}>
            <MaterialIcons name="warning" size={20} color="#B3261E" />
            <View style={styles.alertContent}>
              <Text style={styles.alertTitle}>Atenção</Text>
              <Text style={styles.alertMessage}>
                Ao excluir esse carro de sua coleção, não será mais possível recuperar as suas informações!
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.btnExcluir} onPress={onConfirm}>
            <Text style={styles.textoExcluir}>Sim, Excluir</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnCancelar} onPress={onCancel}>
            <Text style={styles.textoCancelar}>Não, Cancelar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ExcluirModal;
