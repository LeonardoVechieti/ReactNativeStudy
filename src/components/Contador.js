import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


export default () => {
    const [numero, setNumero] = useState(0)
    return (
        <>
            <Text>Contador</Text>
            <Text>{numero}</Text>
            <Button title="+" onPress={() => setNumero(numero + 1)} />
        </>
    )
}

