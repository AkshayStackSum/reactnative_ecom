import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { HomeScreen } from '../Home';
import { route } from '../../data/Routes';
import { FavouritesScreen } from '../favourites/Favourites';
import { ProfileScreen } from '../profile/Profile';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';

const Tab = createMaterialBottomTabNavigator();


export const MyTabs = () => {
    return (
        <Tab.Navigator  activeColor='blue'
         inactiveColor='grey'  
         
        >
            <Tab.Screen name={route.home} component={HomeScreen} options={
                {
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Image source={require('../styles/assest/house.png')} style={{
                                height: 18,
                                width: 18,
                                tintColor: tabInfo.focused ? 'blue' : 'grey'
                            }} />
                        )
                    },

                }
            } />
            <Tab.Screen name={route.favourites} component={FavouritesScreen} options={
                {
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Image source={require('../styles/assest/unlike.png')} style={{
                                height: 18,
                                width: 18,
                                tintColor: tabInfo.focused ? 'blue' : 'grey'
                            }} />
                        )
                    },
                    tabBarBadge:4

                }
            } />
            <Tab.Screen name={route.profile} component={ProfileScreen} options={
                {
                    tabBarIcon: (tabInfo) => {
                        return (
                            <Image source={require('../styles/assest/cart.png')} style={{
                                height: 18,
                                width: 18,
                                tintColor: tabInfo.focused ? 'blue' : 'grey'
                            }} />
                        )
                    },

                }
            } />
        </Tab.Navigator>
    );
}


