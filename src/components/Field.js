import React from 'react'
import {View, StyleSheet, Text, TouchableWithoutFeedback,} from 'react-native'
import params from '../parametros'
import Mine from './Mine'
import Flag from './Flag'

export default props => {

    const {mined, opened, nearMines, exploded, flagged} = props  //extraindo atributos de "props"
    
    const styleField = [styles.field]
    if (opened) {styleField.push(styles.opened)} //acrescenta o estilo do campo aberto
    if (exploded) {styleField.push(styles.exploded)} //acrescenta o estilo do campo explodido
    if (flagged) {styleField.push(styles.flagged)} //acrescenta campo com bandeira
    if (!opened && !exploded) {styleField.push(styles.regular)} // se não houver outros estilos adicionados manten o regular

    let color = null

    if(nearMines > 0){
        if (nearMines == 2){color = '#2a28d7'}
        if (nearMines == 1){color = '#2b520f'}
        if (nearMines > 2 && nearMines < 6){color = '#f9060a'}
        if (nearMines == 6){color = '#f221a9'}
    }

    return (

        <TouchableWithoutFeedback onPress={props.onOpen}
            onLongPress={props.onSelect}>
            <View style={styleField}>
                {!mined && opened && nearMines > 0 ?  // condição para a exibição do numero de minas proximas
                    <Text style={[styles.label, {color: color}]}>
                        {nearMines}
                    </Text>
                :false}
                {mined && opened ? <Mine/> //condição para a mina aparecer
                :false}
                {flagged && !opened ? <Flag/> //condição para a bandeira aparecer
                :false}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#ccc',
        borderTopColor: '#ccc',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    }
})