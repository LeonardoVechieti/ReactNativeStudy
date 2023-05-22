import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


export default (props) => {
    function geraNumero(min, max) {
        const fator = max - min + 1
        return parseInt(Math.random() * fator) + min
    }

    return (
        <View >
            <Button
                title="Executar"
                onPress={() => { props.funcao(geraNumero(props.min, props.max))
                }}
            />
        </View>

    )
}

