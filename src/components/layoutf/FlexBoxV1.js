import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={styles.FlexV1}>
            <Quadrado />
            <Quadrado cor='#F00' />
            <Quadrado cor='#0F0' />
            <Quadrado cor='#00F' />
            <Quadrado cor='#FF0' />
        </View>
    )
}

const styles = StyleSheet.create({
    FlexV1: {
        flex: 1,
        //justifyContent: "space-evenly", //Espaca de forma igualitária os elementos
        //justifyContent: "space-between", //Espaca entre os elementos internos, mas não nas bordas
        //justifyContent: "center", //Centraliza os elementos
        //justifyContent: "flex-end", //Alinha os elementos na parte inferior
        //justifyContent: "flex-start", //Alinha os elementos na parte superior
        //justifyContent: "space-around", //Espaca de forma igualitária os elementos, mas com o dobro de espaço nas bordas

        alignItems: "center",
        maxWidth: '100%',
        backgroundColor: 'gray'
    }
})

