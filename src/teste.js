// 3 funções para criação do tabuleiro do jogo

const createBoard = (rows, columns) => { //cria a matriz de posições do campo
    return Array(rows).fill(0).map((_, row) =>{ //preenche as linhas com 0 e depois coloca o valor do indice
        return Array(columns).fill(0).map((_, column) => { //preenche as colunas com 0 e depois coloca o valor do indice
            return {
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0,
            }
        })
    })
}

const spreadMines = (board, minesAmount) => {  //espalhar as minas no tabuleiro
    const rows = board.lenght
    const columns = board[0].lenght // conta as colunas
    let minesPlanted = 0

    while(minesPlanted < minesAmount) {
        const rowSel = parseInt(Math.random() * rows, 10) //gera um numero randomico inteiro da base 10 e multiplica pela quantidade de linhas
        const columnSel = parseInt(Math.random() * columns, 10)

        if(!board[rowSel][columnSel].mined) {     //se o campo selecionado não estiver minado
            board[rowSel][columnSel].mined = true //coloca a mina
            minesPlanted++                                  //indica que tem uma mina plantada a mais
        }
    }
}

const createMinedBoard = (rows, columns, minesAmount) => { //cria o campo já com as minas
    const board = createBoard(rows, columns)
    spreadMines(board, minesAmount)
    return board
}

export { createMinedBoard }