import React from 'react'
import { Text } from 'react-native'

export const Familia = (props) => {
  return (
    <>
        <Text>Membros da Família:</Text>
        {props.children}
    </>
  )
}
