import React, {useEffect, useState} from 'react';
import {ScrollView, Text, Pressable, StyleSheet} from 'react-native';
import axios from 'axios';

const Home = ({navigation}) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokedex();
  }, []);

  const getPokedex = async () => {
    const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon');
    setPokemons(pokemon.data.results);
  };

  return (
    <ScrollView style={styles.container}>
      {pokemons.map((item, index) => (
        <Pressable
          key={index}
          onPress={() => navigation.navigate('Detalhes', {pokemon: item})}
          style={styles.listItem}>
          <Text style={styles.text}>{item.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    backgroundColor: 'white',
    borderColor: '#dedede',
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
  },
  text: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
