import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home,Location,Chat,Profile, Successful, Failed } from '../screens/index'
import {Ionicons } from "@expo/vector-icons"
import { COLORS } from '../constants/theme'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import TopTab from './TopTab'
import AuthTopTab from './AuthTopTab'

const Tab = createBottomTabNavigator();


const tabBarStyle = {
    padding: 20,
    borderRadius: 20,
    height: 80,
    position:"absolute",
    bottom : 20,
    left: 20,
    right: 20,
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
    
        initialRoutName='Home'
        activeColor='#EB6A58'
        tabBarHideKeyBoard = {true}
        headerShown = {false}
        barStyle={{paddingBottom: 48}}
    >
        <Tab.Screen 
        name='Home' component={Home} options={
            {
                tabBarStyle: tabBarStyle,
                tabBarShowLabel: false,
                headerShown:false,
                tabBarIcon:({focused}) =>(
                    <Ionicons
                    name={focused ? "grid" : "grid-outline"}
                    color={focused ? COLORS.red : Colors.gray}
                    size={26}
                    />
                )
            }
        }
        />
        {/* <Tab.Screen 
        name='Loaction' component={Location} options={
            {
                tabBarStyle: tabBarStyle,
                tabBarShowLabel: false,
                headerShown:false,
                tabBarIcon:({focused}) =>(
                    <Ionicons
                    name={focused ? "location" : "location-outline"}
                    color={focused ? COLORS.red : Colors.gray}
                    size={26}
                    />
                )
            }
        }
        /> */}
        <Tab.Screen 
        name='Chat' component={AuthTopTab} options={
            {
                tabBarStyle: tabBarStyle,
                tabBarShowLabel: false,
                headerShown:false,
                tabBarIcon:({focused}) =>(
                    <Ionicons
  name={focused ? "lock-closed" : "lock-closed-outline"}
  color={focused ? COLORS.red : Colors.gray}
  size={26}
/>

                )
            }
        }
        />
        <Tab.Screen 
        name='Profile' component={TopTab} options={
            {
                tabBarStyle: tabBarStyle,
                tabBarShowLabel: false,
                headerShown:false,
                tabBarIcon:({focused}) =>(
                    <Ionicons
                    name={focused ? "person" : "person-outline"}
                    color={focused ? COLORS.red : Colors.gray}
                    size={26}
                    />
                )
            }
        }
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigation