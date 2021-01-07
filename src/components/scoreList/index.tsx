import React from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';
import ScoreItem from '../scoreItem';
import { useSelector } from '../../store/react-redux'
import { selectScores } from '../../store/selctors'

const ScoreList = () => {

  const scores = useSelector(selectScores);

  return (
    <FlatList
      style={stl.scroll}
      numColumns={1}
      fadingEdgeLength={400} 
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
      data={scores}
      keyExtractor={(item, idx) => item + idx}
      renderItem={({ item, idx }) => {
        return <ScoreItem
          key={idx}
          score={item.score}
          name={item.name}
        />
      }}
    />
  );
}

const stl = StyleSheet.create({
  scroll: {
    width: '100%',
    paddingHorizontal: '2%',
  },
});

export default ScoreList;