
 export const getGift = async( category ) => {
    //  guardamos la busqueda en una variable y se le asigna la categoria a buscar
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=5&api_key=35gH0cOwU1Pqat7FPOv9DF8ODrlL5Ky3`;
    // hacemos el fetch
    const respuesta = await fetch( url );
    // destructuramos la data de la respuesta del fetch
    const { data } = await respuesta.json();
    // recorremos el arreglo y regresamos los datos que nos interesan en objeto
    const gifs = data.map( img  =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    //le pasamos el arreglo al arreglo vacio del images (se encuentra en el useState)
    return gifs
}