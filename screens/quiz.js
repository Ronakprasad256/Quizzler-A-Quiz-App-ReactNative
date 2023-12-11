import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/title';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Quiz = ({navigation}) => {
  const [question, setQuestion] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const getQuid = async () => {
    setIsLoading(true)
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestion(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]))
    setIsLoading(false)

  };

  useEffect(() => {
    getQuid()
  }, []);

  const handleNextPress = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(question[ques + 1]))

  }

  const generateOptionsAndShuffle = (_question) => {
    const options = [..._question.incorrect_answers]
    options.push(_question.correct_answer)

    shuffleArray(options)

    return options
  }

  const handleSelectedOption = (_option) => {
    if (_option === question[ques].correct_answer) {
      setScore(score + 10)
    }
    if (ques !== 9) {
      setQues(ques + 1);
      setOptions(generateOptionsAndShuffle(question[ques + 1]))
    }
    if (ques === 9) {
      handleShowResult()
    }
  }

  const handleShowResult = () => {
    navigation.navigate('Result', {
      score: score
    })
  }

  return (
    <View style={styles.container}  >
      {isLoading ? <View><Text>Loading...</Text></View> : question && (
        <View style={styles.parent}>
          <View style={styles.top}>
          <Title titleText= "QUIZZLER"/>

            <Text style={styles.question}>Q. {decodeURIComponent(question[ques].question)}</Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[0])}>
              <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[1])}>
              <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[2])}>
              <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton} onPress={() => handleSelectedOption(options[3])}>
              <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
            {/* <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>PREV</Text>
            </TouchableOpacity> */}
            {ques !== 9 && <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={handleNextPress}>NEXT</Text>
            </TouchableOpacity>}
            {ques === 9 && <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={handleShowResult}>SHOW RESULT</Text>
            </TouchableOpacity>}

          </View>
        </View>
      )}
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },

  options: {
    marginVertical: 16,
    flex: 1,
    marginHorizontal: 20,

  },
  bottom: {
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    backgroundColor: '#994D1C',
    textAlign: 'center',
    borderRadius: 10,
    marginHorizontal: 20
  },
  buttonText: {
    fontSize: 18,
    color: '#FFEFE8',
  },
  question: {
    fontSize: 25,
    marginVertical: 20
  },
  option: {
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: 'black'
  },
  optionButton: {
    backgroundColor: '#DED0B6',
    margin: 5,
    borderRadius: 15,
  },
  parent: {
    height: '90%'
  }
})