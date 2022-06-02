import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import axios from 'axios';

const Detalhes = ({route}) => {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    if (route.params.pokemon) {
      getPokemon();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params]);

  const getPokemon = async () => {
    const retorno = await axios.get(route.params.pokemon.url);

    setPokemon(retorno.data);
  };

  return (
    <View style={styles.container}>
      {pokemon && (
        <View style={styles.card}>
          <Image
            source={{uri: pokemon.sprites.front_default}}
            style={styles.img}
          />
          <Text style={styles.title}>{pokemon.name}</Text>
          <Text style={styles.subtitle}>Tipo</Text>
          {pokemon.types.map(item => (
            <Text style={styles.text}>{item.type.name}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default Detalhes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    padding: 30,
    borderRadius: 5,
    borderColor: '#ababab',
    borderWidth: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    textTransform: 'capitalize',
  },
  img: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 48,
    color: '#21445B',
    textTransform: 'capitalize',
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#1A6566',
  },
});
