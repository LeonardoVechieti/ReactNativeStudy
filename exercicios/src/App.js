import React from 'react'
import { View, Text } from 'react-native'
import Primeiro from './components/Primeiro'
import Multi, {Comp1, Comp2 } from './components/Multi'

const App = () => {
  return (
    <View>
        <Text>Primeiro Componente</Text>
        <Primeiro />
        <Multi />
        <Comp1 />
        <Comp2 />
    </View>
  )
}

export default App