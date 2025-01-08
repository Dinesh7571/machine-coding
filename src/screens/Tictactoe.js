import { StyleSheet, Text, View, TouchableOpacity, Button, Alert } from 'react-native';
import React, { useState } from 'react';

const Tictactoe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleCellPress = (index) => {
    if (board[index] || checkWinner(board)) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winner = checkWinner(newBoard);
    if (winner) {
      Alert.alert(`Player ${winner} wins!`);
    } else if (!newBoard.includes(null)) {
      Alert.alert('It\'s a draw!');
    }
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
  );
};

export default Tictactoe;

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
