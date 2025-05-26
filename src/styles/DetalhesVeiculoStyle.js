import { StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7F89AB',
    alignItems: 'center',
    paddingTop: 40,
  },

  imagem: {
    width: 300,
    height: 200,
    marginBottom: 10,
    marginTop: 5
  },

  nome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },

  formularioContainer: {
    backgroundColor: '#BCC3DB',
    borderRadius: 20,
    padding: 20,
    width: screenWidth * 0.9,
    marginBottom: 20,
  },

  label: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
    marginBottom: 4,
  },

  input: {
    backgroundColor: '#9AA2BB',
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    width: 300,
    borderWidth: 0
    
  },

  botaoConcluir: {
    backgroundColor: '#3B3B98',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    width: screenWidth * 0.6,
    alignSelf: 'center',
    marginTop:30,
    width: 130
  },

  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  botaoExcluir: {
    backgroundColor: '#D1493D',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    width: screenWidth * 0.6,
    alignSelf: 'center',
    marginTop: 10,
    width: 130

  },

  textoBotaoExcluir: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
