import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Filho from './Filho'

export default () => {
    function exibirValor(numero){
        console.warn(numero)
    }
    return (
        <View >
            <Text>O valor aletorio é: </Text>
            <Filho
                min={1}
                max={60}
                funcao={exibirValor}
            />
        </View>
    )
}