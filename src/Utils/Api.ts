import axios from 'axios';
import { Dispatch } from 'redux';
import { RootState } from '../Store';
import { fetchPokemonList } from '../Reducers/pokemonReducer';
import { fetchPokemonDetails } from '../Reducers/pokemonDetailsReducer';
import { SetErrorMessageType, SetIsLoadingType } from '../Types';
import { useNavigate } from 'react-router-dom';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const fetchPokemonsAsync = (setIsLoading: SetIsLoadingType, setErrorMessage: SetErrorMessageType) => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    setIsLoading(true);
    api
      .get('pokemon/')
      .then((result: { data: any }) => {
        setIsLoading(false);
        dispatch(fetchPokemonList(result.data));
      })
      .catch(() => {
        setErrorMessage('API has failed');
      });
  };
};

export const fetchPokemonDetailsAsync = (
  id: string,
  setIsLoading: SetIsLoadingType,
  setErrorMessage: SetErrorMessageType,
  navigate: ReturnType<typeof useNavigate>
) => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    setIsLoading(true);
    api
      .get(`pokemon/${id}/`)
      .then((result: { data: any }) => {
        setIsLoading(false);
        dispatch(fetchPokemonDetails(result.data));
        // navigate('/details');
      })
      .catch(() => {
        setErrorMessage('API has failed');
      });
  };
};
