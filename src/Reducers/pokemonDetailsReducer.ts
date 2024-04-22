import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PokemonProp {
  name: string;
  url: string;
}

export interface PokemonState {
  name: string;
  sprite: any;
  height: number;
  weight: number;
  types: {};
}

const initialState: PokemonState = {
  name: '',
  sprite: {},
  height: 0,
  weight: 0,
  types: {},
};

export const pokemonDetailsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    fetchPokemonDetails: (state, action: PayloadAction<any>) => {
      state.name = action.payload.name;
      state.sprite = action.payload.sprites;
      state.height = action.payload.height;
      state.weight = action.payload.weight;
      state.types = action.payload.types;
    },
  },
});

export const { fetchPokemonDetails } = pokemonDetailsSlice.actions;

export default pokemonDetailsSlice.reducer;
