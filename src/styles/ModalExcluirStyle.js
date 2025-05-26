import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    elevation: 10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 24,
    width: '85%',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  alertBox: {
    flexDirection: 'row',
    backgroundColor: '#FDECEA',
    borderRadius: 8,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#B3261E',
    marginBottom: 30,
    width: '100%',
  },
  alertContent: {
    marginLeft: 10,
    flex: 1,
  },
  alertTitle: {
    fontWeight: 'bold',
    color: '#B3261E',
    marginBottom: 4,
  },
  alertMessage: {
    color: '#000',
    fontSize: 14,
  },
  btnExcluir: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  textoExcluir: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  btnCancelar: {
    backgroundColor: '#1C1C1C',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  textoCancelar: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;
