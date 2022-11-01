import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Pressable, Alert } from 'react-native';
import Style from './TopBanner.style';

const TopBanner = ({ totalBalance, addHandler }) => {
  return (
    <View style={Style.container}>
      <View style={Style.title}>
        <Text style={Style.font}>Menu</Text>
      </View>
      <View style={Style.total}>
        <Text style={Style.font}>${totalBalance}</Text>
      </View>
      <Pressable
        style={Style.button}
        onPress={() => {
          Alert.alert('Create input');
        }}>
        <Text style={Style.font}>+</Text>
      </Pressable>
    </View>
  );
};

export default TopBanner;

