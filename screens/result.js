import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Result = ({navigation}) => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
                <Image source={{ uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/online-test-time-4033995-3337507.png' }}
                    style={styles.banner}
                    resizeMode='contain'
                />
      </View>
      <View>
        <Text onPress={()=>navigation.navigate('Home')}>Home</Text>
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
}
})