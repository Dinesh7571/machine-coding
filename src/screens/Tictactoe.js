import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'

const Tictactoe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleCellPress = (index) => {
    if (board[index]) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const renderCell = (index) => (
    <TouchableOpacity style={styles.cell} onPress={() => handleCellPress(index)}>
      <Text style={styles.cellText}>{board[index]}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <View style={styles.board}>
        {board.map((_, index) => renderCell(index))}
      </View>
      <Button title="Reset" onPress={handleReset} />
    </View>
  )
}

export default Tictactoe

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    board: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 300,
        height: 300,
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#000',
        marginBottom: 20,
    },
    cell: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#e0e0e0',
    },
    cellText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});