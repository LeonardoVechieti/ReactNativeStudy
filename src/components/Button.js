import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default (props) => {
    const { nome } = props
    return (
        <View>
            <Button
                title={nome}
            />
        </View>
    )
}

