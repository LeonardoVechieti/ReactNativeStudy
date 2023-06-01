import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'


export default (props) => {
    return (
        <View style={styles.View}>
            <Text style={styles.Text}>
                {props.numero}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Text: {
        width: 50,
        height: 50,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        backgroundColor: 'green',
        textAlignVertical: 'center',
        borderRadius: 25,

    },
    View: {
        margin: 5,
    }
})


