import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Pressable, Alert } from 'react-native';
import Style from './Item.style';

const Item = ({ item }) => {
  const { id, value, type, description } = item;
  const descriptionMaxlength = 20;
  return (
    <View style={[Style.container, Style[type]]}>
      <View style={Style.text}>
        <Text style={Style.description}>
          {description.length < descriptionMaxlength
            ? description
            : description.substring(0, descriptionMaxlength - 1) + '...'}
        </Text>
        <Text style={Style.value}>${value}</Text>
      </View>
      <Pressable
        style={[Style[`button_${type}`], Style.button]}
        onPress={() => {
          Alert.alert(`Item ${id} deleted`);
        }}>
        <Text style={Style.font}>Delete</Text>
      </Pressable>
    </View>
  );
};

export default Item;

