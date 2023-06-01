import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default (props) => {
    const {min, max} = props
    const aleatorio = parseInt(Math.random() * (max - min)) + min

    return (
        <View >
            <Text style={styles.container}>O valor aleatorio é: {aleatorio}</Text>
        </View>

  )
}

const styles = StyleSheet.create({
    container: {
        fontSize: 25
    }
})

