import './App.css';
import { useQuery } from 'react-query';
import { fetchPokemon } from "./api/Pokemon";

function App() {

  const { data, isLoading, isError, error } = useQuery('Pokemon', fetchPokemon);

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>{`Error: ${error.message}`}</h1>

  const pokemon = data.results;
  console.log(pokemon);

  return (
    <div className="App">
      <h1>React-Query Practice</h1>
      {pokemon.map((poke, i) => {
        const upperCase = poke.name[0].toUpperCase() + poke.name.slice(1);
        
        return <h3 key={i}>{upperCase}</h3>
      })}
    </div>
  );
}

export default App;
