import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import color from '../Utils/color';
import SellerHomeScreen from '../Screens/SellerHomeScreen/SellerHomeScreen';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();
export default function TabNavigationSeller  (){
    const Tab = createBottomTabNavigator();
    return (
        

      <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:color.PRIMARY,
        tabBarActiveBackgroundColor:color.WHITE,
    
      }}>
        <Tab.Screen name='SellerHomescreen' component={SellerHomeScreen}
        options={{
        tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginTop:-7}}>Home</Text>
        ),
        tabBarIcon:({color,size})=>(
            <AntDesign name="home" size={size} color={color} />
        )
        }}
        />
      </Tab.Navigator>
   

    )
}

const styles = StyleSheet.create({})
