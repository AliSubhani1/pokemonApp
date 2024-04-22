import { Route, Routes } from 'react-router-dom';
import { PokemonList } from '../Components/PokemonList';
import { PokemonDetails } from '../Components/PokemonDetails';

const AppRouter = () => (
  <Routes>
    <Route path='/' element={<PokemonList />} />
    <Route path='/details' element={<PokemonDetails />} />
  </Routes>
);
export default AppRouter;
