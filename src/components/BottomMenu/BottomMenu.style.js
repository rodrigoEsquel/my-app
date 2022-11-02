import { StyleSheet } from 'react-native';

const BottomMenuStyle = StyleSheet.create({
  container: {
    bottom: 0,
    height: 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  font: {
    fontSize: 20,
    margin: 5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 80,
  },
});

export default BottomMenuStyle;

