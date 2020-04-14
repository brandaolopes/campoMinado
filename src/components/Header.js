import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import Flag from './Flag'

export default props => {
    return(
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress}
                    style={styles.flagButton}>
                    <Flag bigger/>
                </TouchableOpacity>
                <Text style={styles.flagsLeft}>
                   = {props.flagsLeft}
                </Text>
            </View>
            <TouchableOpacity onPress={props.reset}
                style={styles.reset}>
                <Text style={styles.buttonLabel}>
                    Novo Jogo
                </Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingHorizontal: 20,
        width: Dimensions.get('window').width,

    },
    flagContainer: {
        flexDirection: 'row',
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30,
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: 20,
    },
    reset: {
        backgroundColor: 'green',
        padding: 5,
        borderBottomColor: '#eee',
        borderBottomWidth: 2,
        borderRadius: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
})