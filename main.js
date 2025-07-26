fetch('https://pokeapi.co/api/v2/pokemon/snorlax')
.then((response)=>{
  response.json()
  
})
.then(data => console.log(data))
.catch((e)=>{
  console.log(e)
})


async function Simsalabim() {
  try{
    const name = document.getElementById('pokename').value
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

    if(!response.ok){
      throw new Error("ja era")
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const img = document.getElementById('pokemonsprite')

    img.src = pokemonSprite;
    img.style.display = 'block';
  }  
  catch(e){

    console.log(e)
  }
}