import React from 'react'
import { Text } from 'react-native'

export const Membros = (props) => {
  return (
    <>
        <Text>{props.nome} {props.sobrenome}</Text>
    </>
  )
}
