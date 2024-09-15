import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, TouchableHighlight } from 'react-native-web';



export default function App() {

  const [counter, setCounter] = useState(0);

  function counterFunction() {
    return setCounter(counter + 1);
  }

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.counterText}>{counter}</Text>
        <TouchableHighlight style={styles.counterPressable} onPress={counterFunction} underlayColor={'gray'}>
          <Text style={styles.pressableText}>PLUS ONE</Text>
        </TouchableHighlight>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    width: 240,
    height: 240,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 8,
  },
  counterPressable: {
    flex: 0.5,
    width: 100,
    backgroundColor: 'red',
    borderRadius: 8,
    justifyContent: 'center',
  },
  counterText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  pressableText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});