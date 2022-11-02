import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Pressable, Alert } from 'react-native';
import Style from './BottomMenu.style';

const BottomMenu = () => {
  return (
    <View style={Style.container}>
      <Pressable
        style={Style.button}
        onPress={() => {
          Alert.alert('Move Data Page');
        }}>
        <Text style={Style.font}>Data</Text>
      </Pressable>
      <Pressable
        style={Style.button}
        onPress={() => {
          Alert.alert('Move Home Page');
        }}>
        <Text style={Style.font}>Home</Text>
      </Pressable>
      <Pressable
        style={Style.button}
        onPress={() => {
          Alert.alert('Move Create Item Page');
        }}>
        <Text style={Style.font}>Add</Text>
      </Pressable>
    </View>
  );
};

export default BottomMenu;

