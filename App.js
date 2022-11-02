import React from 'react';
import { Text, View, StyleSheet, Image, Pressable, Alert } from 'react-native';
import TopBanner from './src/components/TopBanner/TopBanner';

const App = () => {
  return (
    <View style={styles.container}>
      <TopBanner totalBalance={1000} />
      <Text style={styles.title}>Hello World</Text>
      <Image
        source={{ uri: 'https://picsum.photos/200/200' }}
        style={styles.image}
      />
      <Pressable>
        <Text
          style={styles.button}
          onPress={() => {
            Alert.alert('hola');
          }}>
          Press ME
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292929',
  },
  title: { fontSize: 30, color: '#F2F2F2' },
  image: { height: 200, width: 200, borderRadius: 100 },
  button: {
    fontSize: 20,
    color: '#F2F2F2',
    backgroundColor: 'black',
    padding: 7,
    marginTop: 10,
  },
});

export default App;
