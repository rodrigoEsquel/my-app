import { StyleSheet } from 'react-native';

const TopBannerStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    height: 90,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: 'white',
  },
  font: {
    fontSize: 20,
    margin: 5,
  },
  title: {
    marginBottom: 10,
  },
  total: {
    backgroundColor: '#F0F0F0',
    margin: 10,
    width: 200,
    borderRadius: 15,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 60,
    borderRadius: 15,
    backgroundColor: '#F0F0F0',
  },
});

export default TopBannerStyle;

