import React from 'react';
import { View, Text, Button } from 'react-native';

const GameSelectionScreen = ({ navigation }) => {
  const games = [
    { id: 1, name: 'Game 1' },
    { id: 2, name: 'Game 2' },
    { id: 3, name: 'Game 3' },
  ];

  return (
    <View>
      <Text>Select a Game</Text>
      {games.map(game => (
        <Button key={game.id} title={game.name} onPress={() => navigation.navigate('Game', { gameId: game.id })} />
      ))}
    </View>
  );
};

export default GameSelectionScreen;