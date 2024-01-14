import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

interface IHome{
    navigation: any
}

const Home:React.FC<IHome> = ({ navigation }) => {

    const navigatoToPost = () => {
        navigation.push('Post')
    }

    return (
        <SafeAreaView style={styles.theme} >
            <Text style={styles.text}>Hello world</Text>
            <TouchableOpacity onPress={navigatoToPost}>
                <Text style={styles.text}>
                    Go to Post
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    theme: {
        backgroundColor: 'rgb(10,10,10)',
        flex: 1
    },
    text: {
        color: 'white'
    }
})

export default Home;
