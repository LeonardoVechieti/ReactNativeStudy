import React from 'react'
import { Text } from 'react-native'
import Produto from './Produto'
import produtos from './produtos'

export default props => {
    return (
        <>
            {/* Exibe a lista de produtos */}
            <Text>Lista de Produtos:</Text>
            {produtos.map(p => {
                return <Produto key={p.id} {...p} />
            })}
        </>
    )
}
