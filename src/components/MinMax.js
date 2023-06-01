import React from 'react'
import { View, Text, StyleSheet } from 'react-native'



export default (props) => {
  return (
    <View >
        <Text style={styles.container}>O valor {props.max} é maior que o valor {props.min}.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        fontSize: 25
    }
})

