import { useEffect, useState } from "react"
import { FetchData } from '../../utils/Services'

function FetchApi() {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    FetchData("https://pokeapi.co/api/v2/pokemon").then(data => {
      setPokemons(data.results)
      /*
      bulbasaur
      ivysaur
      venusaur
      charmander
      ...
    */
    })
  }, [])
  return (
    <div>
      {pokemons ? pokemons.map((item, key) => (<div key={key}>{item.name}</div>)) : <div>loading</div>}
    </div>
  )
}

export default FetchApi