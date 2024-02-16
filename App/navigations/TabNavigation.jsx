import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../Screens/ProfileScreen/Profile';
import { AntDesign } from '@expo/vector-icons';
import color from '../Utils/color';
import HomeScreenNavigation from './HomeScreenNavigation';
import BookingScreenNavigation from './BookingScreenNavigation';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function TabNavigation  (){
 
    return (
      <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:color.PRIMARY,
        tabBarActiveBackgroundColor:color.WHITE,
      }}>
        <Tab.Screen name='homescreen' component={HomeScreenNavigation}
        options={{
        tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginTop:-7}}>Home</Text>
        ),
        tabBarIcon:({color,size})=>(
            <AntDesign name="home" size={size} color={color} />
        )
        }}
        />
        <Tab.Screen name='booking' component={BookingScreenNavigation}
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginTop:-7}}>Booking</Text>
            ),
            tabBarIcon:({color,size})=>(
                <AntDesign name="profile" size={size} color={color} />
            )
            }}
        />
        <Tab.Screen name='profile' component={Profile}
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color,fontSize:12,marginTop:-7}}>Profile</Text>
            ),
            tabBarIcon:({color,size})=>(
                <AntDesign name="user" size={size} color={color} />
            )
            }}
        />

      </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})
