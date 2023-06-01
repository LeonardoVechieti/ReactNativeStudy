import React from 'react'
import { Text } from 'react-native'
import If from './conditional/If'

export const UsuarioLogado = ({ usuario = {} }) => {
    return (
        <>
            <If test={usuario && usuario.nome && usuario.email}>
                <Text>Usuário Logado:</Text>
                {usuario && <Text>{usuario.nome} - {usuario.email}</Text>}
            </If>
        </>
    )
}
