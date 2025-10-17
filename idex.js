//Karol Scarlett Galindo Piedra 5°B
async function buscarPokemon(){

    const nombre = document.getElementById("pokemon").value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;

    try{
        const respuesta = await fetch(url);
        if(!respuesta.ok) {
            throw new Error("Pokémon no encontrado");
        }
        const datos = await respuesta.json();

        document.getElementById("resultado").innerHTML = `
        <h2>${datos.name.toUpperCase()}</h2>
        <p>Altura: ${datos.weight}</p> 
        <p>Peso: ${datos.height}</p>
        <img src="${datos.sprites.front_default}" alt="${datos.name}">
        `;} 
        catch(error){document.getElementById("resultado").innerHTML = `<p style="color:red;">${error.message}</p>`;}}