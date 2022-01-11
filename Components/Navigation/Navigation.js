import React from 'react';
import { createStackNavigator,NavigationContainer } from '@react-navigation/stack';

import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import HomePage from '../Screens/HomePage';


const Stack = createStackNavigator();

const MainStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="HomePage" component={HomePage} />
        </Stack.Navigator>
    )
};

export default MainStackNavigation;
