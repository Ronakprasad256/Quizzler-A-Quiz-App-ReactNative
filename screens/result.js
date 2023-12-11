import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from '../components/title';

const Result = ({ navigation, route }) => {
  const { score } = route.params

  const resultBanner = score > 20 ? "https://th.bing.com/th/id/R.b5e2bbe632f1d1fb21183e591090705f?rik=TuCWrP2RJRIvAQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f_geB706KR1Ws%2fTQS720nYlNI%2fAAAAAAAAArM%2fuZI8nsNjhaM%2fs1600%2fiStock_Trophy.jpg&ehk=i2oa7yQQJ7I0fJoWEJiZKRw3Y6ayr4x6H8KOVbxMOJQ%3d&risl=&pid=ImgRaw&r=0" : "https://media.istockphoto.com/photos/depressed-3d-man-sitting-on-white-picture-id484821736?k=6&m=484821736&s=170667a&w=0&h=Hhw9a7B5fxu5cabfbZO1SJdrivqI4wZpIf03gF0SEo0="
  return (
    <View style={styles.container}>
      <Title titleText='RESULTS'/>
      <Text style={styles.scoreValue}>YOUR SCORE {score}/100</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: resultBanner,
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
        <Text style={styles.buttonText}>GO TO HOME</Text>
      </TouchableOpacity>
    </View>
  );
};



export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 420,
    width: 420,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#DF826C',
    padding: 8,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  scoreValue: {
    padding: 20,
    fontSize: 24,
    fontWeight: '800',
    alignSelf: 'center'
  }
});