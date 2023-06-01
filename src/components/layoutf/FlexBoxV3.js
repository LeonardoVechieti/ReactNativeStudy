import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={styles.FlexV3}>
            <Quadrado />
            <Quadrado cor='#F00' lado={20}/>
            <Quadrado cor='#0F0' lado={30}/>
            <Quadrado cor='#00F' lado={40}/>
            <Quadrado cor='#FF0' lado={50}/>
            <Quadrado cor='#0FF' lado={60}/>
        </View>
    )
}

const styles = StyleSheet.create({
    FlexV3: {
        height: 350,
        width: '100%',
        flexDirection: "row", //Alinha os elementos na horizontal
        //flexDirection: "row-reverse", //Alinha os elementos na horizontal, mas na ordem inversa
        //flexDirection: "column", //Alinha os elementos na vertical
        //flexDirection: "column-reverse", //Alinha os elementos na vertical, mas na ordem inversa
        justifyContent: "space-between", //Espaca de forma igualitária os elementos
        alignItems: "baseline", //Um trata os elementos do eixo principal e o outro do eixo secundário

        backgroundColor: 'gray'
    }
})

