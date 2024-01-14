import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./screens/Home";
import Post from "./screens/Post";





const RootNavigation:React.FC = (): JSX.Element => {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name="Post" component={Post}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation
