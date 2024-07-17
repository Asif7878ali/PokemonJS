let pokemondata = [];
const container = document.getElementById("Pokemon-container")

const pokomon = 'https://pokeapi.co/api/v2/pokemon/ditto'
fetch(pokomon).then(responce => responce.json())
.then(data =>{
    const pokedata = data
     console.log(pokedata)
})
.catch(err => console.log(err))


async function fetchData() {
    const search = document.getElementById("search-pokemon").value;
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
        const data = await response.json();
        const { name, sprites: { other: { 'official-artwork': { front_default } } } } = data;
        container.innerHTML=""
        let div =document.createElement('div')
        let img =document.createElement('img')
          img.src=front_default
         let names=document.createElement('h6')
         names.innerHTML=name;
         div.append(img,names)
         container.append(div)

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const myFun=(data)=>{
    const {sprites: { front_default } } = data;
    container.innerHTML=""
     let obj
    let div =document.createElement('div')
     let img =document.createElement('img')
       img.src=data.spirites.front_default
      let name=document.createElement('h6')
      name.innerHTML=data.name;
      div.append(p,name)
      container.append(div)
}