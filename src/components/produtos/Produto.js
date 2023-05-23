import React from 'react'
import { Text } from 'react-native'

export default props => {
    return (
        <>
            <Text>Produto:</Text>
            <Text> {props.id} : {props.nome} : Preço: {props.preco}</Text>
        </>
    )
}

