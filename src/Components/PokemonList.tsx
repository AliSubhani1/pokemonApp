import React, { useEffect, useState } from 'react';
import { fetchPokemonsAsync, fetchPokemonDetailsAsync } from '../Utils/Api';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Store';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import { PokemonDetails } from './PokemonDetails';

export const PokemonList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    dispatch(fetchPokemonsAsync(setIsLoading, setErrorMessage));
  }, [dispatch]);
  const pokemons = useSelector((state: RootState) => state.pokemon?.results);
  const showDetails = (url: string) => {
    const match = url.match(/pokemon\/(\d+)\//);
    if (match && match[1]) {
      const id = match[1];
      dispatch(fetchPokemonDetailsAsync(id, setIsLoading, setErrorMessage, navigate));
      console.log(id);
    }
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='flex gap-4'>
          <div className='flex flex-col items-start'>
            <>
              <h3 className='bg-blue-500 text-white w-[200px] p-2 mb-4'>PokeReact</h3>
              <ul className='w-[200px] text-center'>
                {pokemons.map((value) => (
                  <div
                    key={value.url}
                    className='pb-2 cursor-pointer hover:bg-blue-400'
                    onClick={() => showDetails(value.url)}
                  >
                    <div className='w-full border-t border-gray-300'></div>
                    <li className='my-2'>{value.name}</li>
                  </div>
                ))}
              </ul>
            </>
          </div>
          <PokemonDetails />
        </div>
      )}
      <div>{errorMessage && <p className='text-[14px] text-center text-red-0 max-w-[300px]'>{errorMessage}</p>}</div>
    </>
  );
};
