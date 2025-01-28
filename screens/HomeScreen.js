import React,{useLayoutEffect} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons'
import {View, Text, StyleSheet} from 'react-native';

export default function HomeScreen({navigation}) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Ionicons name="arrow-forward" size={30} onPress={() => navigation.navigate('Details')}/>
            )
        })
    })

  return (
    <View style={style.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });