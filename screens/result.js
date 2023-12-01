import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Result = ({ navigation, route }) => {
  const params = route.params
  console.log(params)
  return (
    <View>
      <View>
        <Text style={styles.Result}>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
                <Image source={{ uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/online-test-time-4033995-3337507.png' }}
                    style={styles.banner}
                    resizeMode='contain'
                />
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.Home} onPress={() => navigation.navigate('Home')}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300
},
bannerContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  Home: {
    fontSize: 20,
    fontWeight: '600',
    padding: 10,
    backgroundColor: '#31304D',
    color: '#FFEFE8',
    textAlign: 'center',
    borderRadius: 20,
    marginTop: 120
  },
  Result: {
    
  }
})