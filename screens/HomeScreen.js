import React from 'react';
import {View,StyleSheet,Text,Pressable} from 'react-native';
import { Button } from 'react-native-paper';


const HomeScreen = ({navigation}) => (
    
      <View style={style.container}>
          <Pressable onPress= {() => navigation.navigate('DetailsScreen')}>
            <Text>Home screen</Text>
          </Pressable>

         
      </View>
    
  )


const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default HomeScreen