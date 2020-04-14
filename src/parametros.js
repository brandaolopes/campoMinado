//Arquivo que serve para definir a quantidade de campos o jogo terá.
// Este número varia de acordo com o tamanho do dispositivo.

import {Dimensions} from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.20, //proporção do cabeçalho na tela
    difficultLevel: 0.1, //numero de campos minados na tela

    getCulumnsAmount(){ //retorna o numero de colunas possivel para o jogo
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },

    getRowsAmount(){
        const totalHeight = Dimensions.get('window').height
        const boardHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(boardHeight / this.blockSize)
    }
}

export default params