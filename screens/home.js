import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Home = ({ navigation }) => {
    return (
        <View>
            <Title />
            <View style={styles.bannerContainer}>
                <Image source={{ uri: 'https://image.freepik.com/free-vector/quiz-background-with-hand-holding-a-sign_23-2147593100.jpg' }}
                    style={styles.banner}
                    resizeMode='contain'
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
                <Text style={styles.start}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    banner: {
        height: 300,
        width: 300
    },
    bannerContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 120
    },
    start: {
        fontSize: 20,
        fontWeight: '600',
        padding: 10,
        backgroundColor: '#31304D',
        color: '#FFEFE8',
        textAlign: 'center',
        borderRadius: 20,
        marginTop: 120
    }
})