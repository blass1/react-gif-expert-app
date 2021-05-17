// Promesa async que devuelve gifs

export const getGifs = async(category) => {

    //utilizamos el encode para sacar los espacios y transformarlos en data de la url
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=ZPJ6nf1iq0ceG4wNI3fpISF8sBONuKhQ`;
    const respuesta = await fetch( url );
    // Desestructuro el arreglo
    const { data } = await respuesta.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    })

    //console.log(gifs);

    return gifs;

}