import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Filho from './Filho'

export default () => {
    const [num, setNum] = useState(0)

    function exibirValor(numero) {
        setNum(numero)
    }
    return (
        <>
            <Text>O valor aletorio é: </Text>
            <Filho
                min={1}
                max={60}
                funcao={exibirValor}
            />
            <Text>{num}</Text>
        </>
    )
}