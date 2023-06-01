import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import Numero from './Numero'


export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }

    //Função para gerar numeros aleatorios
    gerarNumeroNaoContido = (min, max, array) => {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min

        return aleatorio
    }


    gerarNumeros = (qtd) => {
        const numeros = Array(qtd)
            .fill()
            .reduce((nums) => {
                const novoNumero = this.gerarNumeroNaoContido(1, 60, nums)
                console.log([...nums, novoNumero])
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)
        this.setState({ numeros })
    }


    render() {
        return (
            <>
                <View >
                    <Text style={styles.Text}>Gerador de Mega-Sena</Text>
                    <Text style={styles.Text}>{this.state.qtdNumeros}</Text>
                </View>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Quantidade de números"
                    //Tranforma o valor em numero em string
                    value={`${this.state.qtdNumeros}`}
                    //value={this.state.qtdNumeros}
                    onChangeText={qtd=> this.setState({ qtdNumeros: qtd })}
                />
                <Button
                    title="Gerar"
                    onPress={() => this.gerarNumeros(this.state.qtdNumeros)}
                />
                {/* map de numeros com o componente numero*/}
                <View style={styles.View}>
                    {this.state.numeros.map(num => {
                        return <Numero key={num} numero={num} />
                    })}
                </View>


            </>

        )
    }
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    }, 
    View: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 30,
    }
})


