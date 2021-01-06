import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';


const SecondScreen = (props) => {


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    </TouchableWithoutFeedback>
  );
}

const stl = StyleSheet.create({

});


export default SecondScreen;