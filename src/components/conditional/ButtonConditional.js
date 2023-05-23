import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export const ButtonConditional = (props) => {
    if (props.dark == true) {
        return (
            <>
                <TouchableOpacity onPress={props.acao}>
                    <Text style={{ backgroundColor: '#000', color: '#fff', padding: 10, margin: 10, borderRadius: 5 }}>{props.nome}</Text>
                </TouchableOpacity>
                {props.children}
            </>
        )
    } else {
        return (
            <>
                <TouchableOpacity onPress={props.acao}>
                    <Text style={{ backgroundColor: '#fff', color: '#000', padding: 10, margin: 10, borderRadius: 5 }}>{props.nome}</Text>
                </TouchableOpacity>
                {props.children}
            </>
        )
    }
}
