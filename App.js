import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import TopBanner from './src/components/TopBanner/TopBanner';
import Item from './src/components/Item/Item';

const App = () => {
  const itemList = [
    { id: 1, value: 100, type: 'income', description: 'salary' },
    { id: 2, value: 200, type: 'critical', description: 'car fix' },
    { id: 3, value: 150, type: 'pleasure', description: 'movie night' },
    { id: 4, value: 100, type: 'income', description: 'salary' },
  ];
  return (
    <View style={styles.container}>
      <TopBanner totalBalance={1000} />
      <View style={{ flex: 1, padding: 10 }}>
        <FlatList
          data={itemList}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
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
