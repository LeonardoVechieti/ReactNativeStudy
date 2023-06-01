import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={styles.FlexV2}>
            <Quadrado />
            <Quadrado cor='#F00' />
            <Quadrado cor='#0F0' />
            <Quadrado cor='#00F' />
            <Quadrado cor='#FF0' />
        </View>
    )
}

const styles = StyleSheet.create({
    FlexV2: {
        flex: 1, //Ocupa todo o espaço disponível, no caso cria os dois eixos
        maxWidth: '100%', //Define o tamanho da largura
        minWidth: '100%', //Define o tamanho mínimo da largura
        //maxWidth: '100%', //Define o tamanho máximo da largura
        //height: 350, //Define o tamanho da altura
        //maxHeight: 350, //Define o tamanho máximo da altura

        //alignItems: "flex-end",
        //alignItems: "flex-start",
        //alignItems: "center",
        alignItems: "stretch", //Um trata os elementos do eixo principal e o outro do eixo secundário
        justifyContent: "space-between",
        backgroundColor: 'gray',

    }
})

