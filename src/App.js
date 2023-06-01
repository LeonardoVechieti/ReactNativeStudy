import React, { Fragment } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Primeiro from './components/Primeiro'
import Multi, { Comp1, Comp2 } from './components/Multi'
import MinMax from './components/MinMax'
import NumeroAleatorio from './components/NumeroAleatorio'
import Button from './components/Button'
import Contador from './components/Contador'
import Pai from './components/indireta/Pai'
import { Familia } from './components/relacao/Familia'
import { Membros } from './components/relacao/Membros'
import { ButtonConditional } from './components/conditional/ButtonConditional'
import { UsuarioLogado } from './components/UsuarioLogado.js'
import ListaProdutos from './components/produtos/ListaProdutos'
import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
import Input from './components/input/Input'
import Quadrado from './components/layoutf/Quadrado'
import FlexBoxV1 from './components/layoutf/FlexBoxV1'
import FlexBoxV2 from './components/layoutf/FlexBoxV2'
import FlexBoxV3 from './components/layoutf/FlexBoxV3'
import FlexBoxV4 from './components/layoutf/FlexBoxV4'
import Mega from './components/mega/Mega'

export default App = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Primeiro Componente</Text>
      <Primeiro />
      <Multi />
      <Comp1 />
      <Comp2 />
      <MinMax min="3" max="20" />
      <NumeroAleatorio min={1} max={60} />
      <Button nome="Nome do botão!" />
      <Contador />
      <Pai />
      <Familia>
        <Text>Um texto qualquer:</Text>
        <Membros nome="Bia" sobrenome="Arruda" />
        <Membros nome="Carlos" sobrenome="Arruda" />
        <Button nome="Nome do botão!" />
        <Membros nome="Ana" sobrenome="Arruda" />
      </Familia>
      <Familia>
        <Membros nome="Julia" sobrenome="Silva" />
        <Membros nome="Pedro" sobrenome="Silva" />
        <Membros nome="Rebeca" sobrenome="Silva" />
      </Familia> */}

      {/* Condicional sem children */}
      {/* <ButtonConditional
        nome="Botão 1"
        dark={true}
        acao={() => console.warn('Botão 1 pressionado!')}
      /> */}
      {/* Condicional com children */}
      {/* <ButtonConditional
        nome="Botão 2"
        dark={false}
        acao={() => console.warn('Botão 2 pressionado!')}
      >
        <Text>Texto do botão 2</Text>
      </ButtonConditional> */}
      {/* Componente so exibe quando o objeto estiver compelto */}
      {/* <UsuarioLogado usuario={{ nome: 'Leonardo', email: 'leo@leo.com' }} />
      <UsuarioLogado usuario={{ nome: 'Leonardo' }} />
      <UsuarioLogado usuario={{ email: 'leo@leo.com' }} />
      <UsuarioLogado usuario={{ nome: 'Fabio', email: 'fabio@fabio.com' }} /> */}

      {/* Lista de produtos */}
      {/* <ListaProdutos /> */}

      {/* <ListaProdutosV2 /> */}

      {/* <Input /> */}

      {/* <FlexBoxV1/> */}
      {/* <FlexBoxV2/> */}
      {/* <FlexBoxV3/> */}
      {/* <FlexBoxV4/> */}
      <Mega qtdNumeros={7}/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20

  }
})


