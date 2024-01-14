# React-Native Demo + Typescript

## Project initiliaztion

Create a new react-native application. For ease of use, we will use Expo
`npx create-expo-app -t expo-template-blank-typescript`
You can name the project 'mobile' if you are planning on also having a backend

## Project Set up:

- components directory
- screens directory
    - Create a directory inside of this called Home
- navigation.tsx


## Set up navigation

In navigation.tsx we need to set up the "route" handlers
Mobile applications don't use apps, so we call these screens.

1. import React from 'react'
2. import {createStackNavigator} from '@react-navigation/stack';
You will likely need to npm install this using:

`npm i @react-navigation/stack`
`npm i @react-navigation/native`

3. import {NavigationContainer} from '@react-navigation/native';
4. import Home from "./screens/Home

5. create a functiion, exported default, called RootNavigation.
    - Create a variable called `Stack` pointing to the initialization of createStackNavigator

    - create an object called `screenOptions` that has a key:value pair of headerShown:false

    - return your NavigationContainer Element wrapping around your Stack.Navigator element. Stack.Screen components will be sandwiched between these wrappers.

`navigation.tsx`
```tsx
    import React from "react";
    import { createStackNavigator } from '@react-navigation/stack';
    import { NavigationContainer } from '@react-navigation/native';
    import Home from "./screens/Home";

    const RootNavigation:React.FC = (): JSX.Element => {
        const Stack = createStackNavigator();

        const screenOptions = {
            headerShown: false,
        };


        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
                    <Stack.Screen name='Home' component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

    export default RootNavigation
```


## Set up Home

In /screens/Home, create an index.tsx file. The imdex.tsx will contain our components that make up Home screen

1. import React from 'react'
2. import View,Text, SafeAreaView, Stylesheet from 'react-native
3. Create an interface for your navigation, set to any
4. make sure to pass that interface as a prop type
5. return a SafeAreaView wrapper with a Text of "Hello World"
6. Add a styles by using a StyleSheet.create() method. It takes an object of style keys and value objects of css


`/screens/Home/index.tsx`

```tsx
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

interface IHome{
    navigation: any
}

const Home:React.FC<IHome> = ({ navigation }) => {
    return (

        <SafeAreaView style={styles.theme} >
            <Text style={{color: "white"}}>Hello world</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    theme: {
        backgroundColor: 'rgb(10,10,10)',
        flex: 1
    }
})

export default Home;


```


## Set up App.tsx

In App.tsx, import your RootNavigation from `./navigation` and return that as a component within your App

```tsx
import RootNavigation from './navigation';


export default function App() {
  return (
    <RootNavigation />
  );
}
```

You should now have a basic react-native skeleton


## Handling the stack of screens

Mobile development utilizes stacks to handle screens. This means the home screen is stack element 0, and when you 'go to a new page' you are just adding page 1 onward on top of element 0. When we 'go back' we are just popping off that screen from the stack until we make our way back to element 0 (home). Additionally, we can pop off multiple items at a time if needed.
For this reason, you should manage your application with the following things in mind

1. Do not allow non-stop adds to the stack as this can clutter up your devices's memory and drop performance/crash app. Twitter, for example has this bug where you can technically keep adding tweet -> user profile -> tweet -> user profile, even if the items are exactly the same which leaves you pressing back many times to get to home page.

2. Add some animations so that it looks like screens 'swipe in' from sides. Apple is very picky about these animations, and typically required "go foward" actions to have screens coming in from the right, and "go back" actions to have screens push into the right.



To test out multiple screens, create a new screen folder and copy the format of Home. Add some different text to make sure you can test it out. For this Example, I will be using a Post screen.

In `navigation.ts` add a new Stack.screen with a name of "Post" and the component pointing to the new Post component.

In `Home/index.tsx` create a function called `navigateToPost`. This function does not need to take any arguments. Have it invoke the `navigation` prop, and push "Post".

To handle a clickable text, we can use `TouchableOpacity`. import this from the react-native library. When you use Touchable Opacity, give it an onPress argument that will run the `navigateToPost` function. In the TouchableOpacity component, add a Text component to write "Go to Post". Now, when you click on the text, it will take you to the new screen

On the post page, you can implement the same structure, but instead of pushing 'Home" (which is a go forward action), we want to pop(), to remove the current screen and return back to base screen




## Design Considerations

Apple is very picky on styling. This makes it very easy to design applications, as they only approve applications that meet their simplicity and accessiblity friendly requirements.

- Nav bars, Nav bars should be towards the bottom and have limited buttons. If you need more than 4 or 5 navigation buttons, aim to have a Nav drawer that comes from the sides.

- Aim to keep text and content (like images) at a reasonable size so that users that struggle to see smaller items can also see your content

- Aim to have all buttons/clickable items (within reason) within tapping distance with your thumb. Apple want's their apps to be accessible to those who may be physically impaired and may only be able to use a hand, so minimal hand adjustments the better

- Aim to prevent many flashing/overly complex animations. These can hinder users who may suffer Epeleptic Seizures

- Keep simple color patterns, and follow the typical color conventions used:
    - Red buttons are for logging out, or deleting items
    - Go forward buttons should be on the right (submit, navigate, accept)
    - go back buttons should be on the left (cancel, go back, decline)
    - Green buttons for accept

- Apple aims to keep loading times reasonable. Iphones are meant to be mobile computers that allow people to quickly access content/apps on the go. If applications need to take a while to load, you may need to optimize/minimize the application.

- Application should be able to use native hardware and minimal 3rd party apps to function.

    - Example, if I want to make a photoshop app, I shouldn't rely on users already having Apps X Y and Z to use my app. Instead, they should be able to store their photos in the Photos app (and/or icloud), retrieve these items (after accepting permission to share this), and be able to share/export content via other apps/iMessage/email. Additionally, apps should support native hardware to the best of their ability (native haptics, camera, buttons)


Apple tends to be strict with these requirements because it also allows for a lot of apps to feel familiar. You can download one of the millions of apps on the App store, and as an Iphone User just be able to start using the app quickly. Extremly intuitive. Additionally, having many apps that deviate from this norm may provide Apple with bad reputation and cause them to lose many of their dedicated and loyal users, so they look to minimize changes.
