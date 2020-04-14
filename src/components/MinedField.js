import React from 'react'
import {View, StyleSheet,} from 'react-native'
import Field from './Field'

export default props => {
    const rows = props.board.map((row, r) => {      //vai percorrer toda matriz criando o visual do campo
        const columns = row.map((field, c) => {     //cada campo contem o Array field com as propriedades
            return <Field {...field} key={c}       
                onOpen={() => props.onOpenField(r, c)}
                onSelect={e => props.onSelectField(r, c)}/>      
        })
        return <View style={{flexDirection: 'row'}} key={r}>{columns}</View>
    })
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
       // flexDirection: 'row',
        backgroundColor: '#eee',
    }
})