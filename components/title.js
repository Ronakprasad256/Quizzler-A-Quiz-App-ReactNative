import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = ({titleText}) => {
  return (
    <View>
      <Text style={styles.title}>{titleText}</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '600',
    padding: 10,
    backgroundColor: '#67729D',
    color: '#FFEFE8',
    textAlign: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  }
})