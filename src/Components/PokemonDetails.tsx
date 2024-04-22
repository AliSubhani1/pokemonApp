import { useSelector } from 'react-redux';
import { RootState } from '../Store';

export const PokemonDetails = () => {
  const name = useSelector((state: RootState) => state.pokemonDetails?.name);
  const height = useSelector((state: RootState) => state.pokemonDetails?.height);
  const weight = useSelector((state: RootState) => state.pokemonDetails?.weight);
  const image = useSelector((state: RootState) => state.pokemonDetails?.sprite?.front_default);
  const details = [
    { label: 'Name', details: name },
    { label: 'Height', details: height },
    { label: 'Weight', details: weight },
  ];

  return (
    <>
      {name ? (
        <div className='w-[300px]'>
          <h3 className='bg-blue-500 text-white p-2 mb-4'>{name}</h3>
          <div className='w-full flex items-center justify-center'>
            <img className='w-[150px]' src={image} alt='' />
          </div>
          <div>
            {details.map((value) => (
              <div className=''>
                <div className='w-full border-t border-gray-300'></div>
                <div className='flex justify-between p-2'>
                  <p className='font-bold'>{value.label}</p>
                  <p>{value.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        'No Value Selected'
      )}
    </>
  );
};
