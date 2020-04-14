import React from 'react'
import {View, StyleSheet} from 'react-native'


export default props => {
    return(
        <View style={styles.container}>
            <View style={[styles.flagPole, props.bigger ? styles.bigFlagPole : null]}/>
            <View style={[styles.flag, props.bigger ? styles.bigFlag : null]}/>
            <View style={[styles.base1, props.bigger ? styles.bigBase1 : null]}/>
            <View style={[styles.base2, props.bigger ? styles.bigBase2 : null]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 2,
    },
    flagPole:{
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9,
    },
    flag: {
        position: 'absolute',
        height: 5,
        width: 6,
        backgroundColor: '#f22',
        marginLeft: 3,
    },
    base1: {
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10,
    },
    base2: {
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12,
    },
    bigFlagPole: {
        height: 28,
        width: 4,
        backgroundColor: '#222',
        marginLeft: 16,
    },
    bigFlag: {
        height: 10,
        width: 14,
        backgroundColor: '#f22',
        marginLeft: 3,
    },
    bigBase1:{
        height: 4,
        width: 12,
        backgroundColor: '#222',
        marginLeft: 12,
        marginTop: 20,
    },
    bigBase2:{
        height: 4,
        width: 20,
        backgroundColor: '#222',
        marginLeft: 8,
        marginTop: 24,
    },

})
