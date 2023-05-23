import React from 'react'
import { Text, FlatList } from 'react-native'
import Produto from './Produto'
import produtos from './produtos'

export default ListaProdutosV2 = () => {
    return (
        <>
            {/* Exibe a lista de produtos */}
            <Text>Lista de Produtos:</Text>
            <FlatList
                data={produtos}
                // keyExtractor={item => item.id} sem ele pode gerar warning, converte int para string
                keyExtractor={i => `${i.id}`}
                renderItem={({ item: p }) => {
                    return <Produto {...p} />
                }}
            />
        </>
    )
}

