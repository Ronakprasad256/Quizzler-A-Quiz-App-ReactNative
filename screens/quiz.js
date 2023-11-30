import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/title'

const Quiz = ({ navigation }) => {
  const [question, setQuestion] = useState();
  const [ques, setQues] = useState(0);
  const getQuid =async  () => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
    const res = await fetch(url);
    const data = await res.json();
    setQuestion(data.results);

  }
  useEffect(() => {
    getQuid()
   }, [])
  return (
    <View style={styles.container} >
      <Title />
      {question && (
        <View style={styles.parent}>
      <View style={styles.top}>
        <Text style={styles.question}>Q. {question[ques].question}</Text>
        </View>
        <View style={styles.option}>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.options}>option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.options}>option 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.options}>option 3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.options}>option 4</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('Quiz')}>END</Text>
        </TouchableOpacity> */}
        </View>
        </View>
        )}
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: '100%'
  },
  top: {
    marginVertical: 16,
  },
  option: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    backgroundColor: '#31304D',
    textAlign: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color:  '#FFEFE8',
  },
  question: {
    fontSize: 25,
  },
  options: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    
  },
  optionButton: {
    backgroundColor: '#B6BBC4',
    margin: 5,
    borderRadius: 15
  },
  parent: {
    height: '90%'
  }
})