import React from 'react'
import { View, Text, TextInput } from 'react-native'

export default () => {
  return (
    <>
        <Text>Input</Text>
        <TextInput
            placeholder="Digite seu nome"
            value={null}
            onChangeText={null}
        />
    </>
    
  )
}

