import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={styles.FlexV4}>
            <View style={styles.V0}></View>
            <View style={styles.V1}></View>
            <View style={styles.V2}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    FlexV4: {
        flexGrow: 1, 
        width: 100,
        backgroundColor: 'gray'
    },
    V0: {
        backgroundColor: '#F00',
        flexGrow: 3
    },
    V1: {
        backgroundColor: '#00F',
        flexGrow:  1
    },
    V2: {   
        backgroundColor: '#0F0',
        flexGrow: 3
    }
})

