import React from 'react'
import { Button, View } from 'react-native';
import { StyleSheet} from 'react-native';

const NextScreenBtn = ({btnText, targetScreen, navigation, params}) => {
  return (
    <View style={styles.button}>
      <Button className="btn btn-next" type="button" title={btnText} onPress={ () => navigation.navigate(`${targetScreen}`, {params})} color="white"/>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00008B',
    justifyContent: 'center',
    height: "10%",
    width: "80%",
    marginBottom: "10%",
    borderRadius: "10px",
    alignSelf: 'center'
  },
});

export default NextScreenBtn