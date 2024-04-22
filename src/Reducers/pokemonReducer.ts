import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PokemonProp {
  name: string;
  url: string;
}
const defaultList = {
  name: '',
  url: '',
};

export interface PokemonState {
  count: number;
  next: string;
  previous: string;
  incrementAmount: number;
  results: PokemonProp[];
}

const initialState: PokemonState = {
  count: 0,
  next: '',
  previous: '',
  incrementAmount: 1,
  results: [defaultList] as PokemonProp[],
};

export const pokemonSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    fetchPokemonList: (state, action: PayloadAction<PokemonState>) => {
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.results = action.payload.results;
    },
  },
});

export const { fetchPokemonList } = pokemonSlice.actions;

export default pokemonSlice.reducer;
