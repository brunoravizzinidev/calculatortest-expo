import {StyleSheet} from 'react-native';

export const stylesMaster = StyleSheet.create({
  fondo: {
    backgroundColor: '#eeeeee',
    flex: 1,
  },
  calcContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  resultado: {
    color: '#3f3f3f',
    fontSize: 60,
    marginBottom: 10,
    textAlign: 'right',
  },
  resultadoSmall: {
    color: 'rgba(63,63,63,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  botonContainer: {
    width: 80,
    height: 80,
    // backgroundColor: '#9B9B9B',
    borderRadius: 100,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  botonTexto: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '300',
    color: 'white',
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
  },
});
