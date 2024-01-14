import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

interface IHome{
    navigation: any
}

const Post:React.FC<IHome> = ({ navigation }) => {

    const goBack = () => {
        navigation.pop()
    }

    return (
        <SafeAreaView style={styles.theme} >
            <Text style={{color: "white"}}>Good Bye world</Text>
            <TouchableOpacity onPress={goBack}>
                <Text>Go Back Home</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    theme: {
        backgroundColor: 'rgb(10,10,10)',
        flex: 1
    }
})

export default Post;
