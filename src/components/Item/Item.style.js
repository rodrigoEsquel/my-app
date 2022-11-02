import { StyleSheet } from 'react-native';

const income = {
  backgroundColor: '#4caf50',
  borderColor: '#1b5e20',
  buttonBackground: '#2e7d32',
};
const critical = {
  backgroundColor: '#ef5350',
  borderColor: '#d32f2f',
  buttonBackground: '#c62828',
};
const pleasure = {
  backgroundColor: '#03a9f4',
  borderColor: '#0288d1',
  buttonBackground: '#01579b',
};

const ItemStyle = StyleSheet.create({
  container: {
    height: 90,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
  },
  text: {
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  description: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 13,
    width: 60,
    borderRadius: 15,
    borderWidth: 2,
    color: 'white',
  },
  income: {
    backgroundColor: income.backgroundColor,
    borderColor: income.borderColor,
  },
  button_income: {
    backgroundColor: income.buttonBackground,
    borderColor: income.borderColor,
  },
  critical: {
    backgroundColor: critical.backgroundColor,
    borderColor: critical.borderColor,
  },
  button_critical: {
    backgroundColor: critical.buttonBackground,
    borderColor: critical.borderColor,
  },
  pleasure: {
    backgroundColor: pleasure.backgroundColor,
    borderColor: pleasure.borderColor,
  },
  button_pleasure: {
    backgroundColor: pleasure.buttonBackground,
    borderColor: pleasure.borderColor,
  },
});

export default ItemStyle;

